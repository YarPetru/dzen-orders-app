import React from 'react';
import classNames from 'classnames';

import { HiOutlineClipboardList, HiOutlineTrash, HiChevronRight } from 'react-icons/hi';
import RoundedButton from 'components/common/RoundedButton';

interface IOrderItem {
  isOpenDetails: boolean;
  onClick: () => void;
}

const OrderItem: React.FC<IOrderItem> = ({ isOpenDetails = false, onClick }) => {
  const itemWrapperClasses = classNames('item cursor-pointer  hover:shadow-xl transition-all', {
    'justify-start relative': isOpenDetails,
  });

  return (
    <div className={itemWrapperClasses} onClick={onClick}>
      {!isOpenDetails && <h3 className="basis-1/4">Long long very long Title</h3>}
      <div className="flex items-center gap-2">
        <RoundedButton>
          <HiOutlineClipboardList size={32} />
        </RoundedButton>
        <div className="flex flex-col gap-0">
          <h4>23</h4>
          <p className="text-grey-dark">Products</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="subparagraph">Date</p>
        <p>Date</p>
      </div>

      {!isOpenDetails && (
        <div className="flex flex-col gap-2">
          <p className="subparagraph">Cost</p>
          <p>Cost</p>
        </div>
      )}

      {!isOpenDetails && (
        <RoundedButton>
          <HiOutlineTrash size={32} />
        </RoundedButton>
      )}

      {isOpenDetails && (
        <div className="absolute right-0 top-0  h-full  flex items-center justify-center bg-biege-main text-white">
          <HiChevronRight />
        </div>
      )}
    </div>
  );
};

export default OrderItem;
