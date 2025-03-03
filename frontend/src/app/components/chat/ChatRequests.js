export const sendDataToBot = async () => {
    return fetch("/api/chat", {
        method: 'GET',
        signal: AbortSignal.timeout(10 * 1000) // 10 second timeout
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
};
