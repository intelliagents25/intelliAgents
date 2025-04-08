import React, { useState,useImperativeHandle, forwardRef,useEffect } from 'react';
import { Icons } from '../components/Icons';

const frequency_map = { // actual value,  showed on drop down
    'FREQ=ONCE': 'Once',
    'FREQ=DAILY': 'Daily',
    'FREQ=WEEKLY': 'Weekly',
    'FREQ=WEEKLY;BYDAY=MO': 'Weekly - Mondays',
    'FREQ=WEEKLY;BYDAY=TU': 'Weekly - Tuesdays',
    'FREQ=WEEKLY;BYDAY=WE': 'Weekly - Wednesdays',
    'FREQ=WEEKLY;BYDAY=TH': 'Weekly - Thursdays',
    'FREQ=WEEKLY;BYDAY=FR': 'Weekly - Fridays',
    'FREQ=WEEKLY;BYDAY=SA': 'Weekly - Saturdays',
    'FREQ=WEEKLY;BYDAY=SU': 'Weekly - Sundays',
    'FREQ=WEEKLY;BYDAY=MO,WE': 'Weekly - Mon,Wed',
    'FREQ=WEEKLY;BYDAY=TU,TH': 'Weekly - Tue, Thu',
    'FREQ=WEEKLY;BYDAY=MO,WE,FR': 'Weekly - M,W,F'
};
const VerifyTable = forwardRef((props, ref) => {
    const [tableData, setTableData] = useState([]);
    
    // Expose the getData method to parent
    useImperativeHandle(ref, () => ({
        getData: () => tableData,
        updateTableFields: (new_values) => {
            setTableData([...new_values]);
          }
    }));

    useEffect(() => {
        let icals_json_data = sessionStorage.getItem(process.env.INITIAL_EVENTS_JSON);
        if (icals_json_data == "") {
            console.error("No initial data found in sessionStorage");
            return;
        }
        let eventList = JSON.parse(`{ "items":` + icals_json_data + "}").items;
        // setTableData(eventList);
        // Ensure parsedData is an array
        if (!Array.isArray(eventList)) {
            eventList = JSON.parse(eventList);
        }
        if (Array.isArray(eventList)) {
            eventList = eventList.map((item) => {
                if (item.all_day) { // this one is for the refresh. 
                    item.start_time = "";
                    item.end_time = "";
                }

                if (item["rrule"] == "FREQ=ONCE") {
                    item.end_date = item.start_date
                }

                // if the end time is 00:00:00 and start time is empty, this end time is probably wrong, 
                // so we set it to empty string.
                item.end_time = (item.end_date == "00:00:00" && item.start_time == "") ? "" : item.end_time

                const is_all_day = (item["start_time"] == "" && item["end_time"] == "")

                item.syllabus = typeof item.syllabus === "string" && item.syllabus.includes(".")
                    ? item.syllabus.split(".")[0]
                    : item.syllabus ?? "";

                return {
                    ...item,
                    "rrule" : item["rrule"] || frequency_map['FREQ=ONCE'],
                    "all_day": is_all_day,
                    "Valid": true,
                    "Errors": {}
                }});
            setTableData(eventList);
        } 
    }, []);

    const handleDeletEvent = (index) => {
        if (index === undefined) {
        return;
        }
        setTableData(tableData.slice(0, index).concat(tableData.slice(index + 1)));
  };

    const appendEmptyEvent = () => {
        const newEvent = {
            "name": "",
            "rrule": frequency_map['FREQ=ONCE'],
            "source": "Manually added",
            "all_day": false,
            "Valid": true,
            "Errors": {}
        };
        setTableData([...tableData, newEvent]);
    }


    // TODO: form validation for date, make sure start is before end date
    const handleFormChange = (e, idx, field) => {
        const updatedData = [...tableData];
        switch (field) {
            case "start_time":
                updatedData[idx][field] = e.target.value;
                updatedData[idx]["all_day"] = false;
                break;
                case "end_time":
                    updatedData[idx][field] = e.target.value;
                    updatedData[idx]["all_day"] = false;
                    break;
            case "all_day":
                updatedData[idx]["all_day"] = e.target.checked;
                updatedData[idx]["start_time"] = ""
                updatedData[idx]["end_time"] = ""
                updatedData[idx]["Errors"]["Date"] = "";
                break;
            case "rrule":
                console.log("rrule changed to " + e.target.key)
                if (e.target.value === "NONE") {
                    delete updatedData[idx]["rrule"];
                } else {
                    updatedData[idx]["rrule"] = e.target.value;
                }
                break; 
            default:
                updatedData[idx][field] = e.target.value;
                break;  
            }
        setTableData(updatedData);
    }

    const handleBlur = (field, index) => {
        const updatedData = [...tableData];
        const row = updatedData[index];
    
        let errorMessage = "";
    
        if (field === "name" && !row["name"].trim()) {
            errorMessage = "Name is required.";
        }
    
        if (field === "Date") {
            const startTime = row["start_time"] 
                ? new Date(`${row["start_date"]}T${row["start_time"]}`) 
                : new Date(`${row["start_date"]}T00:00:00`);
            const endTime = row["end_time"] 
                ? new Date(`${row["end_date"]}T${row["end_time"]}`) 
                : new Date(`${row["end_date"]}T00:00:00`);
            if (startTime > endTime) {
                errorMessage = "Start date and time must be before end date and time.";
            }
        }
    
        updatedData[index]["Errors"][field] = errorMessage;
        setTableData(updatedData);
    };

    return (
        <>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <div className="border border-gray-900 rounded-[50px] overflow-x-auto my-5 bg-[#FFFFFF80] item-center">
            <br />
                <table className="min-w-full w-[80vw] h-[35vh] table-auto p-2">
                    <thead>
                        <tr>
                            <th className="pl-[3rem] pr-4 pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-left w-auto">Name</th>
                            <th className="px-4 py-1 pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-center w-auto">Start Date</th>
                            <th className="px-4 py-1 pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-center w-auto whitespace-nowrap">End Date</th>
                            <th className="pl-4 pr-[3rem] pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-center w-auto whitespace-nowrap">Frequency</th>
                            <th className="pl-4 pr-[3rem] pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-center w-auto whitespace-nowrap">Source</th>

                            <th className="pl-4 pr-[3rem] pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-center w-[5%] whitespace-nowrap">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className="pl-[3rem] pr-4 py-1 text-dark text-[0.2rem] md:text-[0.7rem] lg:text-[1.2rem] text-left w-[25%] align-top">
                                    {/* If the row is rejected and being edited, show input */}
                                        <textarea
                                            required={true}
                                            type="text"
                                            value={row["name"]|| ""}
                                            onChange={(event) => handleFormChange(event, index, "name")}
                                            onBlur={() => handleBlur("name", index)}
                                            className={`w-full p-2 border rounded-md ${
                                                row?.Errors?.["name"] ? "border-red-500" : "border-gray-300"
                                            }`}
                                        />
                                        <p className='text-gray-600'>For: {row.syllabus}</p>
                                        
                                        {row?.Errors?.["name"] && (
                                            <p className="text-red-500 text-xs mt-1">{row.Errors["name"]}</p>
                                        )}
                                </td>

                                <td className="px-4 pt-1 pb-4 text-center cursor-pointer w-[10%] align-top ">
                                <input
                                    type="date"
                                    required={true}
                                    value={row["start_date"]|| ""}
                                    onChange={(event) => handleFormChange(event, index, "start_date")}
                                    onBlur={() => handleBlur("Date", index)}
                                    className={`w-full p-2 border mb-2 rounded-md ${
                                        row?.Errors?.["Date"] ? "border-red-500" : "border-gray-300"
                                    }`}
                                />
                                <input
                                    type="time"
                                    value={row["start_time"]|| ""}
                                    onChange={(event) => handleFormChange(event, index, "start_time")}
                                    onBlur={() => handleBlur("Date", index)}
                                    className={`w-full p-2 border mb-2 rounded-md ${
                                    row?.Errors?.["Date"] ? "border-red-500 font-bold" : "border-gray-300"
                                    }`}
                                />

                                <div className="flex items-center pb-4">
                                    <input type="checkbox" name="all_day" 
                                    onChange={(event) => handleFormChange(event, index, "all_day")}
                                    checked={row["all_day"]}
                                    />
                                    <label htmlFor="all_day" className='ml-2'>All Day</label>
                                </div>

                                {row?.Errors?.["Date"] && (
                                    <p className="text-red-500 text-xs mt-1">{row.Errors["Date"]}</p>
                                )}


                                </td>

                                <td className="w-[10%] px-4 py-1 text-center cursor-pointer align-top">
                                <input
                                    type="date"
                                    value={row["end_date"]|| ""}
                                    required={true}
                                    onChange={(event) => handleFormChange(event, index, "end_date")}
                                    onBlur={() => handleBlur("Date", index)}
                                    className={`w-full p-2 border mb-2 rounded-md ${
                                    row?.Errors?.["Date"] ? "border-red-500 font-bold" : "border-gray-300"
                                    }`}
                                />
                                <input
                                    type="time"
                                    value={row["end_time"]|| ""}
                                    onChange={(event) => handleFormChange(event, index, "end_time")}
                                    onBlur={() => handleBlur("Date", index)}
                                    className={`w-full p-2 border mb-2 rounded-md ${
                                    row?.Errors?.["Date"] ? "border-red-500 font-bold" : "border-gray-300"
                                    }`}
                                />

                                    
                                </td>

                                <td className="w-[25%] pl-4 pr-[3rem] py-1 text-center cursor-pointer align-top">

                                <select
                                    value={row["rrule"]}
                                    required={true}
                                    onChange={(event) => handleFormChange(event, index, "rrule")}
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

                                
                                <td className="w-[20%] pl-4 pr-[3rem] py-1 text-center cursor-pointer align-top">
                                    <p>
                                    {row["source"]}
                                    </p>
                                    
                                </td>

                                <td className="w-[10%] pl-4 pr-[3rem] py-1 text-center cursor-pointer align-top">
                                    
                                        <Icons.xmark
                                            className={`inline-block text-2xl md:text-3xl lg:text-4xl transition-all duration-300 hover:text-red-500`}
                                            onClick={() => handleDeletEvent(index)}
                                        />
                                    
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <button
                    onClick={appendEmptyEvent}
                >
                    Manually add an event (TESTING ONLY)
                </button> */}
            </div>
        </>
    );
});

VerifyTable.displayName = "VerifyTable";
export default VerifyTable;


