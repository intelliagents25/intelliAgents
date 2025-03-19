import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa6";
import { FaEdit } from 'react-icons/fa';

const VerifyTable = ({ rows }) => {

    const [actionStatus, setActionStatus] = useState([]);
    const [editedDescription, setEditedDescription] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        let eventList = sessionStorage.getItem('eventList');
        eventList = JSON.parse(eventList);
        if (!eventList) {
            return;
        }
        setActionStatus(
            eventList.map(() => ({
                accepted: false,
                rejected: false,
            }))
        );
    }, []);

    const handleAccept = (index) => {
        const newStatus = [...actionStatus];
        newStatus[index].accepted = true;
        newStatus[index].rejected = false;
        setActionStatus(newStatus);
    };

    const handleReject = (index) => {
        const newStatus = [...actionStatus];
        newStatus[index].accepted = false;
        newStatus[index].rejected = true;
        setActionStatus(newStatus);
        setEditIndex(index); 
        setEditedDescription(rows[index].description);
    };

    const handleSave = (index) => {
        const updatedRows = [...rows];
        updatedRows[index].description = editedDescription;
        setEditIndex(null);
    };

    const handleChange = (e) => {
        setEditedDescription(e.target.value);
    };

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <div className="border border-gray-900 rounded-2xl overflow-x-auto my-5 bg-[#E4F4FD]">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-[1.2rem] text-[--secondary-color-1] font-bold text-center w-auto">Description</th>
                            <th className="px-4 py-2 text-[1.2rem] text-[--secondary-color-1] font-bold text-center w-auto">Accept</th>
                            <th className="px-4 py-2 text-[1.2rem] text-[--secondary-color-1] font-bold text-center w-auto">Edit Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 text-dark text-right w-auto roboto-font">
                                    {/* If the row is rejected and being edited, show input */}
                                    {actionStatus[index].rejected && editIndex === index ? (
                                        <input
                                            type="text"
                                            value={editedDescription || row.description}
                                            onChange={handleChange}
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                        />

                                    ) : (
                                        row.description
                                    )}
                                </td>

                                <td className="px-4 py-2 text-center cursor-pointer w-auto">
                                    {/* Replace the checkmark with the Save button if row is being edited */}
                                    {actionStatus[index].rejected && editIndex === index ? (
                                        <button
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                            onClick={() => handleSave(index)} // Save when clicked
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <FaCheck
                                            className={`inline-block text-xl transition-all duration-300 ${actionStatus[index].accepted ? 'text-green-500' : 'text-gray-400'} hover:text-green-500`}
                                            onClick={() => handleAccept(index)}
                                        />
                                    )}
                                </td>

                                <td className="px-4 py-2 text-center cursor-pointer w-auto" onClick={() => handleReject(index)}>
                                    <FaEdit
                                        className={`inline-block text-xl transition-all duration-300 ${actionStatus[index].rejected ? 'text-blue-500' : 'text-gray-400'} hover:text-blue-500`}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default VerifyTable;

