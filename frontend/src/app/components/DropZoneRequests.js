import { get } from 'http';
import { redirect } from 'next/navigation'
import { compileFunction } from 'vm';

function generateTableData(icsData) {
    //TODO: given the ics data, create a list of table rows that we can edit
    let mock_data =     [{ description: 'Class Name: MDIA470'},
    { description: 'Group: Agentic AI' },
    { description: 'Final: April 33rd' }]

    return JSON.stringify(mock_data);

}


export const getExtension = (filename) =>{
    var parts = filename.split('.');
    return parts[parts.length - 1];
  }

export const sendFileToBot = async (file) => {
    // redirect person to the the gcals page

    const formData = new FormData();
    formData.append("file", file);

    const requestOptions = {
        method: "POST",
        // headers: headers,
        body: formData,
        redirect: "follow",
        signal: AbortSignal.timeout(10 * 1000)
    };

    try {
        let res = await fetch("/api/upload-resume", requestOptions)
        

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        let data = await res.text()

        if (data) {
            sessionStorage.setItem('icsFile', data);

            let eventList = generateTableData(data);
            sessionStorage.setItem('eventList', eventList)
            console.log("redirecting to verify")
        }
    } catch (error) {
        console.error(error);
    }

    redirect('/verify')
};

