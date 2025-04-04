 async function  uploadChanges(json_data) {
    // save data to session
    sessionStorage.setItem(process.env.INITIAL_EVENTS_JSON, JSON.stringify(json_data));

    // send data to backend and get recommended office hours
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(json_data),
        redirect: "follow",
        signal: AbortSignal.timeout(10 * 1000)
    };
    
    try {
        let res = await fetch("/api/return-edited-events", requestOptions)
        
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        let json_data = await res.text();
        json_data = JSON.parse(json_data);
        json_data = json_data.data;

        if (typeof json_data === "string") {
            try {
              json_data = JSON.parse(json_data);
            } catch (err) {
              console.error("Invalid JSON string:", err);
            }
        }

        json_data = json_data[0].data; //note: this change should probably exist at the API level

        let json_data_string = JSON.stringify(json_data);


        if (json_data_string) {
            sessionStorage.setItem(process.env.RECOMMENDED_OH, json_data_string);
            return true

        }
    } catch (error) {
        console.error(error);
    }
    return false
};

// returns: boolean
function validateInputs(inputs) {
    for (const [index, input] of inputs.entries()) {
        if (input.Name === "" || input["Start Date"] === "" || input["End Date"] === "") {
            return false; // Invalid input found
        }

        if (input["Start Date"] > input["End Date"]) {
            return false; // Start date must be before end date
        }

    }
    return true; // All inputs are valid
}


// returns: boolean
function validateInput(input) {
    if (input.Name === "" || input["Start Date"] === "" || input["End Date"] === "") {
        console.log("a required field is not filled");
        return false; // Invalid input found
    }

    const startTime = row["Start Time"] 
        ? new Date(`${row["Start Date"]}T${row["Start Time"]}`) 
        : new Date(`${row["Start Date"]}T00:00:00`);
    const endTime = row["End Time"] 
        ? new Date(`${row["End Date"]}T${row["End Time"]}`) 
        : new Date(`${row["End Date"]}T00:00:00`);

    if (startTime > endTime) {
        return false; // Start time must be before end time
    }
    return true; // All inputs are valid
}


function getUniqueSources(input_json) {
    let sources = new Set();
    for (const item of input_json) {
        if (item["Source"] !== "") {
            sources.add(item["Source"]);
        }
    }
    return Array.from(sources);
}

export { uploadChanges, validateInputs, validateInput, getUniqueSources};