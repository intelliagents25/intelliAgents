'use client';
import React, { useState, useEffect, useRef } from 'react';
import "../globals.css";
import VerifyTable from './VerifyTable';
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import LoadingAnimation from '../components/LoadingAnimation'; // Import the LoadingAnimation component
import {uploadChanges, validateInputs} from './VerifyEventActions';


const VerifyResults = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [pendingNavigation, setPendingNavigation] = useState(null);
    const childRef = useRef();
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

    
    const handleUploadChanges = async (event) => {
        // Prevent the default form submission behavior
        event.preventDefault(); // Uncomment this if you want to prevent the default form submission`

        console.log("handleUploadChanges called")
        const childData = childRef.current.getData(); 

        if(validateInputs(childData) == false) {
            return false;
        }

        setIsLoading(true);
        
        const ok = await uploadChanges(childData);
        if (ok) {
            router.push('/verify/recommended-oh');
        } else {
            console.error('Failed to upload changes');
        }
    };

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* todo: add a loading animation */}
            {/* {isLoading && (loadng)} */}
            {showModal}
            <LoadingAnimation isLoading={isLoading} />

            <div className="py-[75px] flex flex-col justify-content-center items-center">
                <br />
                <h4 className='text-center'>Verify IntelliAgents' Work! </h4>
                <h5 className="mb-2 pb-5 roboto-font text-light font-bold text-center text-[0.8rem] md:text-[1.3rem] lg:text-[1.8rem]">
                    These are details IntelliAgents need your eyes on.
                </h5>
                
                <div className="w-full flex flex-col items-center">
                    <form className="w-full flex flex-col items-center">
                    <div className="w-full flex justify-center mb-4">
                        <VerifyTable ref={childRef}/>
                    </div>

                    <button type="submit" className="ml-0 button button-blue button-rounded font-bold my-3" onClick={handleUploadChanges}>
                        Generate My Calendar
                    </button>
                    </form>
                    
                    <div className="w-full flex justify-center lg:justify-end lg:absolute lg:top-1/2 mb-6z" style={{ zIndex: -1 }}>
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