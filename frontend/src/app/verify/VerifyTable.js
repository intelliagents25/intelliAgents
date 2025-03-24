import React, { useState,useImperativeHandle, forwardRef,useEffect } from 'react';
import { FaCheck } from "react-icons/fa6";
import { FaEdit } from 'react-icons/fa';

const VerifyTable = forwardRef((props, ref) => {
    const [tableData, setTableData] = useState([]);

    
    // Expose the getData method to parent
    useImperativeHandle(ref, () => ({
        getData: () => tableData,
    }));

    useEffect(() => {
        let icals_json_data = sessionStorage.getItem(process.env.INITIAL_EVENTS_JSON);
        let eventList = JSON.parse(`{ "items":` + icals_json_data + "}").items;
        console.log(eventList);
        setTableData(eventList);
        // Ensure parsedData is an array
        if (!Array.isArray(eventList)) {
            eventList = JSON.parse(eventList);
           
        }
        if (Array.isArray(eventList)) {
            setTableData(eventList);
        }    }, []);


    const handleFormChange = (e, idx, field) => {
        const updatedData = [...tableData];
        updatedData[idx][field] = e.target.value;
        setTableData(updatedData);
    }
    return (
        <>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <div className="border border-gray-900 rounded-2xl overflow-x-auto my-5 bg-[#E4F4FD]">
            <br />
                <table className="min-w-full w-[50vw] h-[35vh] table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-5 text-[1.0rem] md:text-[1.5rem] lg:text-[2rem] text-[--secondary-color-1] font-bold text-left w-auto">Name</th>
                            <th className="px-4 py-5 text-[1.0rem] md:text-[1.5rem] lg:text-[2rem] text-[--secondary-color-1] font-bold text-center w-auto">Start Date</th>
                            <th className="px-4 py-5 text-[1.0rem] md:text-[1.5rem] lg:text-[2rem] text-[--secondary-color-1] font-bold text-center w-auto whitespace-nowrap">End Date</th>
                            <th className="px-4 py-5 text-[1.0rem] md:text-[1.5rem] lg:text-[2rem] text-[--secondary-color-1] font-bold text-center w-auto whitespace-nowrap">Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 text-dark text-sm md:text-xl lg:text-2xl text-left w-auto roboto-font">
                                    {/* If the row is rejected and being edited, show input */}
                                        <input
                                            type="text"
                                            defaultValue={row.Name}
                                            // onChange={handleChange}
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                        />
                                </td>

                                {/* TODO: make this a picker */}
                                <td className="px-4 py-2 text-center cursor-pointer w-auto">
                                <input
                                            type="text"
                                            defaultValue={row["Start Date"]}
                                            // onChange={handleChange}
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                        />
                                    
                                </td>

                                <td className="px-4 py-2 text-center cursor-pointer w-auto">
                                <input
                                            type="text"
                                            defaultValue={row["End Date"]}
                                            onChange={handleFormChange}
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                        />
                                    
                                </td>

                                <td className="px-4 py-2 text-center cursor-pointer w-auto">
                                <input
                                            type="text"
                                            defaultValue={row["Recur"]}
                                            onChange={(event) =>
                                                handleFormChange(event, index, "Recur")
                                            }
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                        />
                                    
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
});

VerifyTable.displayName = "VerifyTable";
export default VerifyTable;


