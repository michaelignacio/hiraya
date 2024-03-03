import React from 'react';
import Overlay from './Overlay';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // Add this line to include children prop
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
        <div className="relative max-w-xl mx-auto my-6 w-full">
          <div className="relative flex flex-col bg-white border-2 border-black rounded-md shadow-xl">
            <div className="flex items-start justify-between p-4 border-b border-gray-300">
              <h3 className="text-lg font-semibold">Inquiry Form</h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                Close
              </button>
            </div>
            <div className="p-4">{children}</div>
          </div>
        </div>
      </div>
      <Overlay isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Modal;