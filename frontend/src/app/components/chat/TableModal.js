const TableModal = ({ tableMarkdown, onClose }) => {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[80vh] overflow-auto p-6 relative">
          <button
            onClick={onClose}
            className="mb-2"
          >
            ✕
          </button>
          <div className="prose max-w-none">
            <github-md>{tableMarkdown}</github-md>
          </div>
        </div>
      </div>
    );
  };
  
  export default TableModal;
  