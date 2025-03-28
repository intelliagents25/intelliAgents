import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";

const VerifyOH = forwardRef((props, ref) => {
  const [tableData, setTableData] = useState([]);

  // Expose the getData method to parent
  useImperativeHandle(ref, () => ({
    getData: () => tableData,
  }));

  useEffect(() => {
    let recommended_oh_json = sessionStorage.getItem(
      process.env.RECOMMENDED_OH
    );
    let eventList = JSON.parse(`{ "items":` + recommended_oh_json + "}").items;
    // Ensure parsedData is an array
    if (!Array.isArray(eventList)) {
      eventList = JSON.parse(eventList);
    }
    if (Array.isArray(eventList)) {
      eventList = eventList.map((item) => {
        return {
          // creates new object that makes it easier for the user to edit
          //   ...item,
          Name: item.Name,
          Attend: true, // this is a new field that we add to the object
        };
      });
      setTableData(eventList);
    }
  }, []);

  const handleAccept = (idx) => {
    const updatedData = [...tableData];
    updatedData[idx].Attend = true;
    console.log(updatedData)
    setTableData(updatedData);
    console.log("handle accept for ", idx);
  };
  const handleReject = (idx) => {
    const updatedData = [...tableData];
    updatedData[idx].Attend = false;
    console.log(updatedData[idx].Attend)
    setTableData(updatedData);
    console.log("handleReject for ", idx);

  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <div className="border border-gray-900 rounded-2xl overflow-x-auto my-5 bg-[#E4F4FD]">
        <br />
        <table className="min-w-full w-[50vw] h-[35vh] table-auto">
          <thead>
            <tr>
              <th className="pr-4 py-5 text-[1.0rem] md:text-[1.5rem] lg:text-[2rem] text-[--secondary-color-1] font-bold text-left"
                style={{ paddingLeft: '2rem'}}>
                Office Hours
              </th>
              <th colSpan="2" className="px-4 py-5 text-[1.0rem] md:text-[1.5rem] lg:text-[2rem] text-[--secondary-color-1] font-bold text-left whitespace-nowrap"
                style={{ paddingRight: '1.2rem'}}>
                Do you want to attend?
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-dark text-sm md:text-xl lg:text-2xl text-left w-auto roboto-font w-[60%]">
                  {/* If the row is rejected and being edited, show input */}
                  <p className="w-full p-4">{row.Name}</p>
                </td>
                {/* Second & Third Columns: Buttons (Centered) */}
                <td colSpan="2" className="px-4 py-2 text-center w-[40%]">
                  <div className="flex justify-center gap-4">
                    {/* Yes Button */}
                    <button
                      onClick={() => handleAccept(index)}
                      className={`rounded-md transition 
                        ${row.Attend ? "bg-[#7C91DC] text-white font-bold" : " "}`}
                      style={{ marginLeft: '0rem'}}
                    >
                      Yes
                    </button>
                    {/* No Button */}
                    <button
                      onClick={() => handleReject(index)}
                      className={`rounded-md transition 
                        ${!row.Attend ? "bg-[#7C91DC] text-white font-bold" : "bg-white text-[--text-colour-dark]"}`}
                      style={{ marginLeft: '3rem'}}
                    >
                      No
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
});

VerifyOH.displayName = "VerifyOH";
export default VerifyOH;
