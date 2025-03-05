export const sendDataToBot = async (message_str) => {
    let data = {"message": message_str}

    return fetch("/api/chat", {
        method: 'POST',
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(15 * 1000) // 10 second timeout
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
        });
};
