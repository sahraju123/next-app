'use client'

// components/Modal.tsx
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, url }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        //   <div className="bg-white w-3/4 h-3/4 rounded-lg overflow-hidden relative">
        //     <iframe src={url} className="w-full h-full"  />
        //     <button
        //       className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
        //       onClick={onClose}
        //     >
        //       X
        //     </button>
        //   </div>
        // </div>
        <div
          id="overlay"
          className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="bg-white w-3/4 h-3/4 rounded-lg overflow-hidden relative">
            <iframe src={url} className="w-full h-full" />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
