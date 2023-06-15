import React from 'react';
import RoundedButton from 'components/common/RoundedButton';
import { HiX, HiPlusCircle } from 'react-icons/hi';

interface IOrderDetails {
  closeDetails: () => void;
}

const OrderDetails: React.FC<IOrderDetails> = ({ closeDetails }) => {
  return (
    <div className="item p-8 flex-col items-start relative">
      <h2>Long long very long Title</h2>
      <div className="text-accent-main">
        <HiPlusCircle />
        <p>Add product</p>
      </div>
      <div>PRODUCTLIST</div>
      <RoundedButton
        className="absolute -top-[24px] -right-[24px] bg-white z-50"
        isShady
        onClick={closeDetails}
      >
        <HiX size={24} />
      </RoundedButton>
    </div>
  );
};

export default OrderDetails;
