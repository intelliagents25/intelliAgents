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
      <div className="border border-gray-900 rounded-[50px] overflow-x-auto my-5 bg-[#FFFFFF80]">
        <br />
        <table className="min-w-full w-[40vw] h-[35vh] table-auto">
          <thead>
            <tr>
              <th className="pl-[3rem] pr-4 pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-left w-auto">
                Office Hours
              </th>
              <th colSpan="2" className="pl-4 pr-[3rem] pt-3 pb-2 text-[0.5rem] md:text-[1.0rem] lg:text-[1.5rem] text-[--secondary-color-1] font-bold text-center w-auto whitespace-nowrap">
                Do you want to attend?
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="pl-[3rem] pr-4 py-1 text-dark text-[0.4rem] md:text-[0.9rem] lg:text-[1.4rem] text-left w-auto roboto-font w-[60%] align-top">
                  {/* If the row is rejected and being edited, show input */}
                  <p className="w-full p-4">{row.Name}</p>
                </td>
                {/* Second & Third Columns: Buttons (Centered) */}
                <td colSpan="2" className="px-4 py-2 text-center align-top mt-1 w-[40%]">
                  <div className="flex justify-center gap-4">
                    {/* Yes Button */}
                    <button
                      onClick={() => handleAccept(index)}
                      className={`rounded-md transition 
                        ${row.Attend ? "bg-[#7C91DC] text-white font-bold" : " "}`}
                      style={{ marginLeft: '0rem', marginRight:'1rem', marginTop: '1.1rem'}}
                    >
                      Yes
                    </button>
                    {/* No Button */}
                    <button
                      onClick={() => handleReject(index)}
                      className={`rounded-md transition 
                        ${!row.Attend ? "bg-[#7C91DC] text-white font-bold" : "bg-white text-[--text-colour-dark]"}`}
                      style={{ marginLeft: '3rem', marginRight:'2rem', marginTop: '1.1rem'}}
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
