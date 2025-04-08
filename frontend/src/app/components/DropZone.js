import React, { useState } from "react";
import { useRouter } from "next/navigation";

import "./DropZone.css";
import { sendFileToBot, getExtension } from "./DropZoneRequests";
import LoadingAnimation from './LoadingAnimation';

const validFileTypes = ["pdf"];

const DropZone = () => {
  const [files, setFile] = useState([]);
  const [fileEnter, setFileEnter] = useState(false);
  const [activeTab, setActiveTab] = useState("upload"); // "upload" or "paste"
  const [textInput, setTextInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const router = useRouter();

  const handleTextUpload = () => {
    if (textInput === "") {
      alert("Please paste the text to upload.");
      return;
    }
    // convert the text to a file and send it to the bot
    const textFile = new File([textInput], "syllabus.txt", { type: "text/plain" });
    
    setIsLoading(true);
    setErrorMessage(false);
    // since sendFile to Bot does a redirect, we don't need to set isLoading to false 
    return sendFileToBot(textFile)
    .then((received) => {
      if (received) {
        // redirect to the next page
        setIsLoading(false);
        router.push('/verify');
      } else {
        throw new Error("Failed to upload the file");
      }
    })
    .catch((error) => {
      setFile([]);
      setErrorMessage(true);
      setIsLoading(false);
    });
  };

  const handleUploadFile = () => {
    if (files.length === 0) {
      alert("Please select a file to upload.");
      return;
    }
    setIsLoading(true);
     // since sendFile to Bot does a redirect, we don't need to set isLoading to false 
     return sendFileToBot(files[0])
       .then((received) => {
         if (received) {
           // redirect to the next page
           setIsLoading(false);
           router.push('/verify');
          } else {
            throw new Error("Failed to upload the file");
          }
        })
        .catch((error) => {
          setFile([]);
          setErrorMessage(true);
          setIsLoading(false);
        });
  };

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      const extension = getExtension(event.target.files[0].name);
      if (validFileTypes.includes(extension)) {
        setFile(files.concat(event.target.files[0]));
        setErrorMessage(false);
        return;
      } else {
        alert("Invalid file type. Please select a PDF file.");
      }
    }
  };

  const removeFile = (index) => {
    if (index === undefined) {
      return;
    }
    setFile(files.slice(0, index).concat(files.slice(index + 1)));
  };

  const onDragOverAction = (e) => {
    e.preventDefault();
    setFileEnter(true);
  };

  const onDragleaveAction = (e) => {
    setFileEnter(false);
  };

  const onDragEndAction = (e) => {
    e.preventDefault();
    setFileEnter(false);
  };

  const onDropAction = (e) => {
    e.preventDefault();
    setFileEnter(false);
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (file) {
            handleFileChange({ target: { files: [file] } });
          }
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file) => {
        handleFileChange({ target: { files: [file] } });
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex border-b">
        <button
          className={`w-1/2 py-3 text-center rounded-[0px] ${
            activeTab === "upload"
              ? "border-b-2 border-gray-500 font-medium bg-white text-black"
              : "text-gray-500 bg-gray-200"
          }`}
          onClick={() => setActiveTab("upload")}
        >
          Upload PDF
        </button>
        <button
          className={`w-1/2 py-3 text-center border rounded-[0px] ${
            activeTab === "paste"
              ? "border-b-2 border-gray-500 font-medium bg-white text-black"
              : "text-gray-500 bg-gray-200"
          }`}
          onClick={() => setActiveTab("paste")}
        >
          Paste text
        </button>
      </div>

      {isLoading && 
      <div className="p-8 bg-white border border-black">
      <div
            className="w-full h-[17rem] p-4"
          >
            <LoadingAnimation isLoading={true} />
          </div>
      </div>
}

      {/* Upload Content */}
      {activeTab === "upload" && !isLoading && (
        <div className="p-8 bg-white border border-black">
          <div
            className={`flex flex-col items-center justify-center p-8 border border-gray-300 rounded-md ${
              fileEnter ? "bg-gray-100" : ""
            }`}
            onDragOver={onDragOverAction}
            onDragLeave={onDragleaveAction}
            onDragEnd={onDragEndAction}
            onDrop={onDropAction}
          >
            {/* Upload Icon */}
            <div className="mb-4 text-gray-400">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <p className="text-center font-medium mb-2">Upload your course syllabus here!</p>
            <p className="text-center text-gray-500 mb-4">Use a PDF file with a size no more than 10MB</p>
            
            {/* File Input */}
            <div>
              <input
                type="file"
                name="file"
                id="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf"
              />
              <label
                htmlFor="file"
                className="px-8 py-2 text-black bg-blue-400 text-white border-[1px] border-black rounded-full hover:bg-blue-500 cursor-pointer"
              >
                Select File
              </label>
            </div>
          </div>
          <button
             className="mt-4 w-full text-white py-2 px-4 rounded-md bg-blue-400 hover:bg-blue-500"
             onClick={handleUploadFile}
           >
             Submit
           </button>
        </div>
      )}

      {/* Paste Text Content */}
      {activeTab === "paste"  && !isLoading  && (
        <div className="p-8 border border-black bg-white">
          <textarea
            className="w-full h-[13.5rem] p-4 border border-gray-300 rounded-md"
            placeholder="Copy and paste your syllabus here"
            name="syllabusText"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          ></textarea>

          <button
            className="mt-4 w-full text-white py-2 px-4 rounded-md bg-blue-400 hover:bg-blue-500"
            onClick={handleTextUpload}
          >
            Submit
          </button>
        </div>
      )}
      {files.map((file, index) => (
        <div key={index} className="flex items-center justify-between mt-2 p-2">
          <p className="text-gray-700">{file.name}</p>
          <a
            className="px-3 py-1 hover:cursor-pointer"
            onClick={() => removeFile(index)}
          >
            X
          </a>
        </div>
      ))}
      {errorMessage && (<p>Upload failed, please retry again</p>)}
    </div>
  );
};

export default DropZone;
