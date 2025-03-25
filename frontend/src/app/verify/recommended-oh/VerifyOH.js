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
    let icals_json_data = sessionStorage.getItem(
      process.env.INITIAL_EVENTS_JSON
    );
    let eventList = JSON.parse(`{ "items":` + icals_json_data + "}").items;
    console.log(eventList);
    setTableData(eventList);
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
              <th className="px-4 py-5 text-[1.0rem] md:text-[1.5rem] lg:text-[2rem] text-[--secondary-color-1] font-bold text-left w-auto">
                Office Hours
              </th>
              <th className="px-4 py-5 text-[1.0rem] md:text-[1.5rem] lg:text-[2rem] text-[--secondary-color-1] font-bold text-center w-auto">
                Do you want to attend?
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-dark text-sm md:text-xl lg:text-2xl text-left w-auto roboto-font">
                  {/* If the row is rejected and being edited, show input */}
                  <p className="w-full p-4">{row.Name}</p>
                </td>

                <td className="px-4 py-2 text-center cursor-pointer w-auto">
                    <button
                      onClick={() => {
                        handleAccept(index);
                      }}
                      className={`px-4 py-2 rounded-md ${row.Attend ?" ": "bg-white text-black"}`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        handleReject(index);
                      }}
                      className={`px-4 py-2 rounded-md ${!row.Attend ?" ": "bg-white text-black"}`}
                    >
                      No
                    </button>
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
