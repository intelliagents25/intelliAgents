import React, { useState } from 'react';

const VerifyTable = ({ rows }) => {
    const [actionStatus, setActionStatus] = useState(
        rows.map(() => ({
            accepted: false,
            rejected: false,
        }))
    );

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
    };

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
                rel="stylesheet"
            />
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-[25px] text-[#000000]" style={{ fontFamily: 'Inria Sans' }}>Description</th>
                            <th className="px-4 py-2 text-left text-[25px] text-[#000000]" style={{ fontFamily: 'Inria Sans' }}>Accept</th>
                            <th className="px-4 py-2 text-left text-[25px] text-[#000000]" style={{ fontFamily: 'Inria Sans' }}>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2 text-[#000008]" style={{ fontFamily: 'Roboto Mono' }}>{row.description}</td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleAccept(index)}
                                        disabled={actionStatus[index].accepted}
                                        className={`px-4 py-2 ${actionStatus[index].accepted ? 'bg-green-500' : 'bg-blue-500'} text-white`}
                                        style={{ fontFamily: 'Roboto Mono' }}
                                    >
                                        Accept
                                    </button>
                                </td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleReject(index)}
                                        disabled={actionStatus[index].rejected}
                                        className={`px-4 py-2 ${actionStatus[index].rejected ? 'bg-red-500' : 'bg-gray-500'} text-white`}
                                        style={{ fontFamily: 'Roboto Mono' }}
                                    >
                                        Reject
                                    </button>
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
