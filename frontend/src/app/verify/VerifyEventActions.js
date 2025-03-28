 async function  uploadChanges(json_data) {
    // save data to session
    sessionStorage.setItem(process.env.INITIAL_EVENTS_JSON, JSON.stringify(json_data));

    // send data to backend and get recommended office hours
    const requestOptions = {
        method: "POST",
        // headers: headers,
        body: json_data,
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

        if (json_data) {
            sessionStorage.setItem(process.env.RECOMMENDED_OH, JSON.stringify(json_data));
            console.log("Data saved successfully, redirecting");
            return true

        }
    } catch (error) {
        console.error(error);
    }
    return false
};

// returns: boolean
function validateInputs(inputs) {
    for (const input of inputs) {
        if (input.Name === "" || input["Start Date"] === "" || input["End Date"] === "") {
            return false; // Invalid input found
        }

        if (input["Start Date"] > input["End Date"]) {
            // console.error("Start date must be before end date");
            return false; // Start date must be before end date
        }
    }
    console.log("All inputs are valid");
    console.log(input["Start Date"] > input["End Date"]);
    return true; // All inputs are valid
}

export { uploadChanges, validateInputs };