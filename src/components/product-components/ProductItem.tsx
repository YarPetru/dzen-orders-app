import React from 'react';
import classNames from 'classnames';
import { HiTrash } from 'react-icons/hi';

interface IProductItem {
  isAvailable?: boolean;
  isShort?: boolean;
}

const ProductItem: React.FC<IProductItem> = ({ isAvailable, isShort }) => {
  const indicatorClasses = classNames('w-4 h-4 rounded-full ', {
    'bg-accent-main': isAvailable,
    'bg-biege-main': !isAvailable,
  });

  return (
    <div className="item text-xs">
      <div className={indicatorClasses}></div>

      <img
        src="https://img.freepik.com/free-photo/computer_1205-717.jpg"
        alt="product cover"
        className="h-12"
      />

      <div className="flex flex-col gap-0">
        <h3>title</h3>
        <p className="subparagraph">Model</p>
      </div>

      {isAvailable ? (
        <p className="text-accent-main">Available</p>
      ) : (
        <p className="text-black">Repaired</p>
      )}

      {!isShort && (
        <>
          <div className="flex flex-col gap-0">
            <div className="flex gap-2  items-center">
              <p className="subparagraph">from</p>
              <p>DATE</p>
            </div>

            <div className="flex gap-2 items-center">
              <p className="subparagraph">to</p>
              <p>DATE</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="subparagraph">Cost</p>
            <p>Cost</p>
          </div>
          <p>Group title</p>
          <p>Author title</p>
          <p>Order title</p>
          <div className="flex flex-col gap-2">
            <p className="subparagraph">Date</p>
            <p>Date</p>
          </div>
        </>
      )}

      <p>New</p>

      <HiTrash size="20" />
    </div>
  );
};

export default ProductItem;
