const MIN_WAIT_TIME = 2000; // if it returns too fast it feels weird

export const sendDataToBot = async (message_str) => {
    let data = {"message": message_str}
    let start = new Date()

    return fetch("/api/chat", {
        method: 'POST',
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(60 * 1000) // 60 second timeout
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then((response) => {
            response = response.message;
            return response;
        })
        .catch((error) => {
            return error;
        })
        .then((response) => {
            let end = new Date();
            if (end - start < MIN_WAIT_TIME) {
                return new Promise(resolve => setTimeout(() => resolve(response), MIN_WAIT_TIME - (end - start)));
            } else {
                return response;
            }
        });
};

export const getFileInfo = async () => {
    // redirect person to the the gcals page
    let file_info = sessionStorage.getItem(process.env.FILE_INFO);
    if (file_info) {

        file_info = JSON.parse(file_info);
        const difference = new Date() - new Date(file_info.last_update);

        if (difference < 1000 * 3 && file_info.files != []) { // check every minute
            return file_info.files;
        }
    }
    const requestOptions = {
        method: "GET",
        signal: AbortSignal.timeout(10 * 1000)
    };

    try {
        let res = await fetch("/api/uploaded-files", requestOptions)

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        let json_data = await res.text();
        json_data = JSON.parse(json_data);
        json_data = json_data.file_info;

        const file_info = {
            files: json_data,
            last_update: new Date()
        }
        sessionStorage.setItem(process.env.FILE_INFO, JSON.stringify(file_info));
        return json_data;
    } catch (error) {
        console.error(error);
    }
    return false
}
