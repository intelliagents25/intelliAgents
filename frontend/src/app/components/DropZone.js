// js component for handling file uploads, including drag and drop

import React, { useState } from "react";
import "./DropZone.css";
import { Icons } from "./Icons";

function getExtension(filename) {
  var parts = filename.split('.');
  return parts[parts.length - 1];
}

const validFileTypes = ["pdf", "docx", "txt"];

const DropZone = () => {
  const [files, setFile] = useState([]);
  const [fileEnter, setFileEnter] = useState(false);
  const handleFileChange = (event) => {
    if (event.target.files[0]){
      const extension = getExtension(event.target.files[0].name);
      if (validFileTypes.includes(extension)){
        setFile(files.concat(event.target.files[0]));
        return;
      }else {
        alert("Invalid file type. Please select a PDF, DOCX, or TXT file.");
      }
    }
  };

  const removeFile = (index) => {
    if (index === undefined) {
      return;
    }
    setFile(files.slice(0, index).concat(files.slice(index+1)))
  }

  const onDragOverAction = (e) => {
    e.preventDefault();
    setFileEnter(true);
  };

  const onDragleaveAction = (e) => {setFileEnter(false)};

  const onDragEndAction = (e) => {
    e.preventDefault();
    setFileEnter(false);
  }

  const onDropAction = (e) => {
    e.preventDefault();
    setFileEnter(false);
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (file) {
            handleFileChange({ target: { files: [file] } });
          }
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file, i) => {
        handleFileChange({ target: { files: [file] } });
      });
    }
  }
  
// Btn for uploading file
// NOTE: maybe this should be its own component?
// customize file btn: https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
const uploadFileButton = (
  <div>
    <input
      type="file"
      name="file"
      id="file"
      className="inputfile"
      onChange={handleFileChange}
      accept=".pdf,.docx,.txt"
    />
    <label
      htmlFor="file"
      className="mt-4 px-6 py-2 bg-[#6138B9] text-white rounded-lg hover:bg-[#532EA3]"
    >
      SELECT FILE
    </label>
  </div>
);

// render list of files + remove btn
const renderFileList = () => {
  return files.length > 0 ? (
    // TODO: remove magic number 500
    <ul className="w-full pt-1 ps-2 max-w-[500px]">
    {files.map((file, index) => (
      <li key={index} className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <Icons.file className="mr-2"/>{file.name}
      </div>
      <button className="button-remove-file" onClick={() => removeFile(index)}>X</button>
      </li>
    ))}
    </ul>
  ) : (
    "No file(s) selected"
  );
};


  return (
    <div className="w-[95%]">
      <h2 className="text-[18px] font-[400] mb-2 text-[#00000080] text-center" style={{ fontFamily: 'Roboto Mono' }}>Continue without sign-in</h2>
      <div className="bg-white p-8 border-2 border-blue-200 rounded-xl">
        <p className="text-gray-600 mb-6">Drag & drop your syllabus to see the magic happen!</p>
        <div 
          className={`${fileEnter ? "active-hover" : ""} border-2 border-dashed border-blue-300 rounded-xl p-8 text-center`}
          onDragOver={(e) => onDragOverAction(e)}
          onDragLeave={(e) => onDragleaveAction(e)} 
          onDragEnd={(e) => onDragEndAction(e)}
          onDrop={(e) => onDropAction(e)}
        >
          <p className="text-lg text-[#151515] mb-2">Select a file or drag and drop here</p>
          <p className="text-sm text-gray-500">Please use a PDF, DOCX, or TXT file size no more than 10MB</p>
          {uploadFileButton}
        </div>
      </div>
      {renderFileList()}
    </div>
  );
};

export default DropZone;


// TODO: error handling for input file:
// https://www.csharp.com/article/how-to-handling-file-uploads-in-next-js/
// https://codersteps.com/articles/building-a-multi-file-uploader-with-next-js-app-directory