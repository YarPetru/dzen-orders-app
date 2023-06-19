import React from 'react';
import classNames from 'classnames';
import { HiOutlineClipboardList, HiOutlineTrash, HiChevronRight } from 'react-icons/hi';
import { getCurrentOrder } from 'store/orders';
import { useAppSelector } from 'hooks';
import { Button, DateBlock, PriceBlock } from 'components/common';
import { IOrder, IPrice } from 'types';

interface IOrderItem {
  order: IOrder;
  productAmount: number;
  totalUsd: IPrice;
  totalUah: IPrice;
  isOpenDetails: boolean;
  handleOpenDetails: () => void;
  handleDeleteOrder: () => void;
}

const OrderItem: React.FC<IOrderItem> = ({
  isOpenDetails = false,
  order,
  productAmount,
  totalUsd,
  totalUah,
  handleOpenDetails,
  handleDeleteOrder,
}) => {
  const itemWrapperClasses = classNames('item hover:shadow-xl transition-all', {
    'justify-start relative': isOpenDetails,
  });

  const currentOrder = useAppSelector(getCurrentOrder);

  const date = new Date(order.date);

  return (
    <li className={itemWrapperClasses}>
      {!isOpenDetails && <h3 className="basis-1/4">{order.title}</h3>}
      <div className="flex items-center gap-2">
        <Button isRounded onClick={handleOpenDetails}>
          <HiOutlineClipboardList size={32} />
        </Button>
        <div className="flex flex-col gap-0">
          <h4>{productAmount}</h4>
          <p className="text-grey-dark">Products</p>
        </div>
      </div>

      <DateBlock date={date} />

      {!isOpenDetails && <PriceBlock priceUsd={totalUsd} priceUah={totalUah} />}

      {!isOpenDetails && (
        <Button isRounded onClick={handleDeleteOrder}>
          <HiOutlineTrash size={32} />
        </Button>
      )}

      {isOpenDetails && currentOrder?._id === order._id && (
        <div
          onClick={handleOpenDetails}
          className="absolute right-0 top-0 h-full flex items-center justify-center cursor-pointer bg-biege-main text-white hover:bg-biege-dark transition-all"
        >
          <HiChevronRight />
        </div>
      )}
    </li>
  );
};

export default OrderItem;
