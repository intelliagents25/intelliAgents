'use client';
import React, { useState, useEffect, useRef } from 'react';
import "../globals.css";
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

                <div className="flex flex-col justify-center items-center">
                    <h1>Verify IntelliAgents' Work! </h1>
                    <h3 className="mb-2 pb-5 roboto-font text-light font-bold">
                        These are details IntelliAgents need your eyes on.
                    </h3>
                    <VerifyTable rows={tableData} />
                </div>
                <div className="flex flex-row justify-center space-x-10 mt-8">
                    {/* Buttons for actions */}
                    <button
                        onClick={handleEdit}
                        className="px-6 py-2 font-bold"
                    >
                        Edit Information
                    </button>
                    <button
                        onClick={handleGenerateCalendar}
                        className="px-6 py-2 button button-blue font-bold"
                    >
                        Generate Calendar
                    </button>
                </div>
        </>
    );
};

export default VerifyResults;
