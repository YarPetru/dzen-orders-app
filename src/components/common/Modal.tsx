import React, { useEffect } from 'react';
import { HiX } from 'react-icons/hi';
import { Button } from 'components/common';

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
    <div
      className="fixed top-0 left-0 w-screen h-screen backdrop-blur-md z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 max-h-5/6 w-1/2 bg-biege-light rounded-lg shadow-2xl text-center flex flex-col items-center gap-12">
        {children}
        <Button
          className="absolute -top-[24px] -right-[24px] bg-white z-40"
          isShady
          isRounded
          onClick={onClose}
        >
          <HiX size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Modal;
