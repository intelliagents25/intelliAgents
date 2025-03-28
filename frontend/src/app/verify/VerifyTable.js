import React, { useState,useImperativeHandle, forwardRef,useEffect } from 'react';
import { FaCheck } from "react-icons/fa6";
import { FaEdit } from 'react-icons/fa';


const frequency_map = { // actual value,  showed on drop down
    'FREQ=DAILY': 'Daily',
    'FREQ=WEEKLY': 'Weekly',
    'FREQ=MONTHLY': 'Monthly',
    'NONE': 'Once'
};
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
            eventList = eventList.map((item) => {
                const is_all_day = (item["Start Time"] == "")
                return {
                    ...item,
                    "All Day": is_all_day,
                }});
            setTableData(eventList);
        }    }, []);

    // TODO: form validation for date, make sure start is before end date
    const handleFormChange = (e, idx, field) => {
        const updatedData = [...tableData];
        switch (field) {
            case "Start Time":
                updatedData[idx][field] = e.target.value;
                updatedData[idx]["All Day"] = false;
                break;
                case "End Time":
                    updatedData[idx][field] = e.target.value;
                    updatedData[idx]["All Day"] = false;
                    break;
            case "All Day":
                updatedData[idx]["All Day"] = e.target.checked;
                updatedData[idx]["Start Time"] = ""
                updatedData[idx]["End Time"] = ""
                break;
            case "Recur":
                if (e.target.value === "NONE") {
                    delete updatedData[idx]["Recur"];
                } else {
                    updatedData[idx]["Recur"] = e.target.value;
                }
                break; 
            default:
                updatedData[idx][field] = e.target.value;
                break;  
            }
        setTableData(updatedData);
        console.log(updatedData);
    }

    return (
        <>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <div className="border border-gray-900 rounded-[50px] overflow-x-auto my-5 bg-[#FFFFFF80]">
            <br />
                <table className="min-w-full w-[50vw] h-[35vh] table-auto p-2">
                    <thead>
                        <tr>
                            <th className="pl-[3rem] pr-4 pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-left w-auto">Name</th>
                            <th className="px-4 py-1 pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-center w-auto">Start Date</th>
                            <th className="px-4 py-1 pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-center w-auto whitespace-nowrap">End Date</th>
                            <th className="pl-4 pr-[3rem] pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-center w-auto whitespace-nowrap">Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className="pl-[3rem] pr-4 py-1 text-dark text-[0.2rem] md:text-[0.7rem] lg:text-[1.2rem] text-left w-2/5 align-top">
                                    {/* If the row is rejected and being edited, show input */}
                                        <input
                                            required={true}
                                            type="text"
                                            defaultValue={row.Name}
                                            onChange={(event) => handleFormChange(event, index, "Name")}
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                        />
                                </td>

                                <td className="px-4 pt-1 pb-4 text-center cursor-pointer w-1/5 align-top ">
                                <input
                                    type="date"
                                    required={true}
                                    value={row["Start Date"]|| ""}
                                    onChange={(event) => handleFormChange(event, index, "Start Date")}
                                    className="w-full p-2 border mb-2 border-gray-300 rounded-md"
                                />
                                <input
                                    type="time"
                                    value={row["Start Time"]|| ""}
                                    onChange={(event) => handleFormChange(event, index, "Start Time")}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />

                                <div className="flex items-center pb-4">
                                    <input type="checkbox" name="all_day" 
                                    onChange={(event) => handleFormChange(event, index, "All Day")}
                                    checked={row["All Day"]}
                                    />
                                    <label htmlFor="all_day" className='ml-2'>All Day</label>
                                </div>

                                </td>

                                <td className="w-1/8 px-4 py-1 text-center cursor-pointer w-1/5 align-top">
                                <input
                                    type="date"
                                    value={row["End Date"]|| ""}
                                    required={true}
                                    onChange={(event) => handleFormChange(event, index, "End Date")}
                                    className="w-full p-2 border mb-2 border-gray-300 rounded-md"
                                />
                                <input
                                    type="time"
                                    value={row["End Time"]|| ""}
                                    onChange={(event) => handleFormChange(event, index, "End Time")}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />

                                    
                                </td>

                                <td className="w-1/8 pl-4 pr-[3rem] py-1 text-center cursor-pointer w-1/5 align-top">

                                <select
                                    value={row["Recur"]}
                                    required={true}
                                    onChange={(event) => handleFormChange(event, index, "Recur")}
                                    className="w-full p-2 border mb-2 border-gray-300 rounded-md"
                                >
                                    {Object.entries(frequency_map).map((key, _) => {
                                        return <option 
                                        key={key[0]} value={key[0]}
                                        
                                        > 
                                        {key[1]}
                                        </option>;
                                    })}
                                </select>
                                    
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


