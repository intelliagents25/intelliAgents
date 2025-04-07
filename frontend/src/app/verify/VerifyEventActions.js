 async function  uploadChanges(json_data) {

    json_data.map((item) => {
        if (item["all_day"]) {
            item["start_time"] = "00:00:00";
            item["end_time"] = "23:59:59";
        }
    });
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

        json_data = json_data[0].body; 

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
    let error_found = false;

    for (const [index, input] of inputs.entries()) {

        if (!input["name"].trim()) {
            input["Errors"]["name"] = "Name is required.";
            error_found = true;
        }
        
        if (!input["start_date"].trim()) {
            input["Errors"]["Date"] = "Start Date is required.";
            error_found = true;
        }else if (!input["end_date"].trim()) {
            input["Errors"]["Date"] = "End Date is required.";
            error_found = true;
        } else if (!input["start_time"].trim() && input["end_time"].trim()) {
            input["Errors"]["Date"] = "Start Time is required.";
            error_found = true;
        } else if (input["start_time"].trim() && !input["end_time"]) {
            input["Errors"]["Date"] = "End Time is required.";
            error_found = true;
        } 

        const startTime = input["start_time"] 
        ? new Date(`${input["start_date"]}T${input["start_time"]}`) 
        : new Date(`${input["start_date"]}T00:00:00`);
        const endTime = input["end_time"] 
            ? new Date(`${input["end_date"]}T${input["end_time"]}`) 
            : new Date(`${input["end_date"]}T00:00:00`);
        if (startTime > endTime) {
            input["Errors"][field] = "Start time must be before end time.";
            console.log("start time is after end time for index " + index);
            error_found = true;
        }
    }
    return !error_found; // All inputs are valid
}


// returns: boolean
function validateInput(input) {
    if (input.Name === "" || input["start_date"] === "" || input["end_date"] === "") {
        console.log("a required field is not filled");
        return false; // Invalid input found
    }

    const startTime = row["start_time"] 
        ? new Date(`${row["start_date"]}T${row["start_time"]}`) 
        : new Date(`${row["start_date"]}T00:00:00`);
    const endTime = row["end_time"] 
        ? new Date(`${row["end_date"]}T${row["end_time"]}`) 
        : new Date(`${row["end_date"]}T00:00:00`);

    if (startTime > endTime) {
        console.log("start time is after end time");
        return false; // Start time must be before end time
    }
    return true; // All inputs are valid
}


function getUniqueSources(input_json) {
    let sources = new Set();
    for (const item of input_json) {
        if (item["source"] !== "") {
            sources.add(item["source"]);
        }
    }
    return Array.from(sources);
}

export { uploadChanges, validateInputs, validateInput, getUniqueSources};