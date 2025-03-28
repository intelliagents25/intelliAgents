'use client';
import React, { useState, useEffect, useRef } from 'react';
import "../globals.css";
import VerifyTable from './VerifyTable';
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import LoadingAnimation from '../components/LoadingAnimation'; // Import the LoadingAnimation component

const VerifyResults = () => {
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Add loading state
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

    const handleGenerateCalendar = () => {
        console.log('Generate Calendar button clicked');
        setIsLoading(true);
        
        setTimeout(() => {
            // Calendar generation logic here
            setIsLoading(false);
            
            // Additional actions after generation
            // e.g., redirect, download, etc.
        }, 3000);
    };

    const [showModal, setShowModal] = useState(false);
    const [pendingNavigation, setPendingNavigation] = useState(null);
    const router = useRouter();
    const pathname = usePathname();

    // Trigger modal logic only on the `/verify` page
    useEffect(() => {
        if (pathname !== '/verify') return; // Exit early if not on `/verify` page

        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = "Are you sure you want to leave?";
            setShowModal(true);
            return "Are you sure you want to leave?";
        };

        // Add the beforeunload event listener to show the browser's warning
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [pathname]); // Re-run the effect only if the pathname changes

    const confirmLeave = () => {
        setShowModal(false);
        if (pendingNavigation) {
            router.push(pendingNavigation); // Navigate to the pending location
        }
    };

    // Render the modal only if pathname is `/verify`
    if (pathname !== '/verify') return null;

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {showModal}
            <LoadingAnimation isLoading={isLoading} />

            <div className="py-[75px] flex flex-col justify-content-center items-center">
                <br />
                <h4 className='text-center'>Verify IntelliAgents' Work! </h4>
                <h5 className="mb-2 pb-5 roboto-font text-light font-bold text-center">
                    These are details IntelliAgents need your eyes on.
                </h5>
                
                <div className="w-full flex flex-col items-center">
                    <div className="w-full flex justify-center mb-4">
                        <VerifyTable rows={tableData} />
                    </div>

                    <button 
                        className="ml-0 button button-blue button-rounded font-bold my-3" 
                        onClick={handleGenerateCalendar}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Generating...' : 'Generate My Calendar'}
                    </button>
                    
                    <div className="w-full flex justify-center lg:justify-end lg:absolute lg:top-1/2 mb-6">
                        <img
                            src="/images/verify-page-gif.svg"
                            alt="Verify"
                            className="w-auto lg:w-[20%] h-auto"
                        />
                    </div>
                </div>
                <br />
            </div>
        </>
    );
};

export default VerifyResults;