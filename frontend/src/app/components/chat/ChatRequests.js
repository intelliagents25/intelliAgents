const MIN_WAIT_TIME = 2000; // if it returns too fast it feels weird

export const sendDataToBot = async (message_str) => {
    let data = {"message": message_str}
    let start = new Date()

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
