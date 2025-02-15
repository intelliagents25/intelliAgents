import React from 'react';

const DropZone = () => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2 text-[#151515]">Continue without sign-in</h2>
      <div className="bg-white p-8 border-2 border-blue-200 rounded-xl">
        <p className="text-gray-600 mb-6">Drag & drop your syllabus to see the magic happen!</p>
        <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center">
          <p className="text-lg mb-2">Select a file or drag and drop here</p>
          <p className="text-sm text-gray-500">Please use a PDF, DOCX, or TXT file size no more than 10MB</p>
          <button className="mt-4 px-6 py-2 bg-[#6138B9] text-white rounded-lg hover:bg-[#532EA3]">SELECT FILE</button>
        </div>
      </div>
    </div>
  );
};

export default DropZone;