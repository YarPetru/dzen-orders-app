import React from 'react';
import { HiPlusCircle } from 'react-icons/hi';

interface IAddButton {
  onClick: () => void;
  isForProducts?: boolean;
}

const AddButton: React.FC<IAddButton> = ({ isForProducts, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-row-aligned text-accent-main hover:text-accent-light transition-all"
    >
      <HiPlusCircle />
      {isForProducts && <p>Add product</p>}
    </button>
  );
};

export default AddButton;
