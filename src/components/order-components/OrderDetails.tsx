import React from 'react';
import classNames from 'classnames';
import { HiX, HiPlusCircle } from 'react-icons/hi';
import { Button } from 'components/common';
import { ProductList } from 'components/product-components';
import { IOrder } from 'types';

interface IOrderDetails {
  order: IOrder | null;
  isVisible: boolean;
  closeDetails: () => void;
}

const OrderDetails: React.FC<IOrderDetails> = ({ order, isVisible, closeDetails }) => {
  const wrapperClasses = classNames(
    'absolute top-0 right-0 item p-8 w-[calc(60%-24px)] flex-col items-start transition-all',
    {
      'translate-x-full opacity-0': !isVisible,
      'translate-x-0 opacity-100': isVisible,
    }
  );
  return (
    <div className={wrapperClasses}>
      <h2>{order?.title}</h2>

      <div className="text-accent-main">
        <HiPlusCircle />
        <p>Add product</p>
      </div>

      <ProductList orderID={order?.id} isForDetails={true} />

      <Button
        className="absolute -top-[24px] -right-[24px] bg-white z-50"
        isShady
        isRounded
        onClick={closeDetails}
      >
        <HiX size={24} />
      </Button>
    </div>
  );
};

export default OrderDetails;
