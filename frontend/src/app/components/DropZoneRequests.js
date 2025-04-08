export const getExtension = (filename) =>{
    var parts = filename.split('.');
    return parts[parts.length - 1];
  }

export const sendFileToBot = async (file) => {
    // redirect person to the the gcals page

    const formData = new FormData();
    formData.append("file", file);
    formData.append("file_name", file.name);

    const requestOptions = {
        method: "POST",
        // headers: headers,
        body: formData,
        redirect: "follow",
    };

    try {
        let res = await fetch("/api/upload-resume", requestOptions)
        

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
              return false;
            }
        }

        json_data = json_data[0].data; //note: this change should probably exist at the API level

        let json_data_string = JSON.stringify(json_data);


        if (json_data_string) {
            sessionStorage.setItem(process.env.INITIAL_EVENTS_JSON, json_data_string);
        }else {
            throw new Error('json_data_string is empty');
        }
        return true
    } catch (error) {
        // console.error(error);
    }
    return false
}
