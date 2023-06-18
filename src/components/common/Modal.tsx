import React, { useEffect } from 'react';

interface IModal {
  onClose: () => void;
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<IModal> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (e: Event) => {
    const keyboardEvent = e as KeyboardEvent;
    if (keyboardEvent.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget === e.target && onClose();
  };

  return !isOpen ? null : (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen backdrop-blur-md z-50"
        onClick={handleOverlayClick}
      >
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 max-h-5/6 w-1/2 bg-grey-main rounded-lg shadow-course-card text-center flex flex-col items-center gap-12">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
