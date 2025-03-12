'use client';
import React, { useState, useEffect, useRef } from 'react';
import VerifyTable from './VerifyTable';

const VerifyResults = () => {
    const [tableData, setTableData] = useState([]);
    const ics = useRef('');
    useEffect(() => {
        // Fetch data from the backend
        ics.current = sessionStorage.getItem('myData');
        let eventList = sessionStorage.getItem('eventList');
        console.log(JSON.parse(eventList));
        if (eventList !== null) {
            setTableData(JSON.parse(eventList));
        }        
    }, []);

    const handleEdit = () => {
        console.log('Edit button clicked');
        // Logic to handle editing, such as opening a modal or redirecting to an edit page
    };

    const handleGenerateCalendar = () => {
        console.log('Generate Calendar button clicked');
        // Logic to generate the calendar, e.g., trigger an API call or open a calendar view
    };

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
                rel="stylesheet"
            />
                <div className="flex flex-col justify-center items-center mt-auto">
                    <h1 className="text-[35px] text-[#000000] font-[800] mb-4" style={{ fontFamily: 'Inria Sans' }}>Verify IntelliAgents' Work! </h1>
                    <p className="text-[#00000080] text-[20px] font-[500] mb-2 pb-5" style={{ fontFamily: 'Roboto Mono' }}>
                        These are details IntelliAgents need your eyes on.
                    </p>
                    <VerifyTable rows={tableData} />
                </div>
                <div className="flex flex-row justify-center items-center space-x-10 mt-auto">
                    {/* Buttons for actions */}
                    <button
                        onClick={handleEdit}
                        className="px-6 py-2 bg-[#6138B9] text-white rounded-md hover:bg-[#BCACE0]"
                        style={{fontFamily: 'Inter'}}
                    >
                        Edit Information
                    </button>
                    <button
                        onClick={handleGenerateCalendar}
                        className="px-6 py-2 bg-[#37B5EC] text-white rounded-md hover:bg-[#85D0F1]"
                        style={{fontFamily: 'Inter'}}
                    >
                        Generate Calendar
                    </button>
                </div>
        </>
    );
};

export default VerifyResults;
