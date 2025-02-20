import React from 'react';

const DropZone = () => {
  return (
    <div className="w-[605.62px] h-[397.43px]">
      <h2 className="text-[35px] font-[700] mb-2 text-[#151515] text-left" style={{ fontFamily: 'Inria Sans' }}>Continue without sign-in</h2>
      <p className="text-[#00000080] text-[20px] font-[500] mb-3 mt-[-12px]" style={{ fontFamily: 'Roboto Mono' }}>Drag & drop your syllabus to see the magic happen!</p>
      <div className="bg-white p-8 border-2 border-blue-200 rounded-xl">
        <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center">
          <p className="text-lg text-[#151515] mb-2">Select a file or drag and drop here</p>
          <p className="text-sm text-gray-500">Please use a PDF, DOCX, or TXT file size no more than 10MB</p>
          <button className="mt-4 px-6 py-2 bg-[#6138B9] text-white rounded-lg hover:bg-[#532EA3]">SELECT FILE</button>
        </div>
      </div>
    </div>
  );
};

export default DropZone;