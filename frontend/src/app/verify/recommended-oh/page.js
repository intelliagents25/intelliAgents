'use client';
import React, { useState, useEffect, useRef } from 'react';
import "../../globals.css";
import VerifyOH from './VerifyOH';
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import generateCalendar from './verifyOhAction';

const VerifyResults = () => {    
    const [showModal, setShowModal] = useState(false);
    const [pendingNavigation, setPendingNavigation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const childRef = useRef();
    const router = useRouter();
    const pathname = usePathname();

    // Trigger modal logic only on the `/verify` page
    useEffect(() => {
        if (pathname !== '/verify/recommended-oh') return; // Exit early if not on `/verify` page

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

    const handleGenerateCalendar = () => {
        setIsLoading(true);
        const offoce_hours_data = childRef.current.getData(); 
        const ok = generateCalendar(offoce_hours_data);

        if (ok) {
            router.push('/complete-ics');
        }else {
            console.error('Failed to generate calendar');
        }
    }

    // Render the modal only if pathname is `/verify`
    if (pathname !== '/verify/recommended-oh') return null;

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {showModal}

            <div className="py-[75px] flex flex-col justify-content-center items-center">
                <br />
                <h4 className='text-center'>Here are some recommended office hours </h4>
                <h2 className="roboto-font text-light font-bold text-center text-[0.8rem] md:text-[1.3rem] lg:text-[1.8rem]">
                    These are added to your calendar to get some help before your major assignments. 
                </h2>
                <h2 className="mb-2 pb-5 roboto-font text-light text-center text-[0.6rem] md:text-[1.1rem] lg:text-[1.6rem]">
                    If you don't want to attend, please select "No". 
                </h2>
                
                <div className="w-full flex flex-col items-center">
                    <div className="w-full flex justify-center mb-4">
                        <VerifyOH ref={childRef}/>
                    </div>

                    <button className="ml-0 button button-blue button-rounded font-bold my-3"
                    
                    onClick={handleGenerateCalendar}>
                        Generate Your Calendar!
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