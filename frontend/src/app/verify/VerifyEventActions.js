 async function  uploadChanges(json_data) {

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


export default uploadChanges;