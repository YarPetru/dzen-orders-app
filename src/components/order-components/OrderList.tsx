import React, { useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { getCurrentOrder, getOrders } from 'store/orders';
import { getProducts } from 'store/products';
import { setCurrentOrder } from 'store/orders/orders-slice';
import OrderItem from './OrderItem';
import OrderDetails from './OrderDetails';
import { Skeleton } from 'components/common';
import { IOrder } from 'types';
import { calculateTotal } from 'helpers';

const OrderList: React.FC = () => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const listWrapperClasses = classNames('relative w-full items-start gap-6 ', {});
  const listClasses = classNames('flex flex-col gap-6 transition-all', {
    'w-full': !openDetails,
    'w-2/5': openDetails,
  });

  const dispatch = useAppDispatch();
  const { data: orders, isLoading, error } = useAppSelector(getOrders);
  const { data: products } = useAppSelector(getProducts);

  const currentOrder = useAppSelector(getCurrentOrder);

  const onOrderClick = (current: IOrder) => {
    if (openDetails) {
      setOpenDetails(false);
      dispatch(setCurrentOrder(null));
    } else {
      setOpenDetails(!openDetails);
      dispatch(setCurrentOrder(current));
    }
  };

  const onCloseDetails = () => {
    setOpenDetails(false);
    dispatch(setCurrentOrder(null));
  };

  const totalProductAmount = (order: IOrder) => {
    return products.reduce((amount, prod) => (prod.order === order.id ? (amount += 1) : amount), 0);
  };

  let renderedOrders;

  if (isLoading) {
    renderedOrders = <Skeleton times={3} flexCol className="h-[94px] w-full" />;
  } else if (error) {
    renderedOrders = <h2>Something went wrong...{error}</h2>;
  } else if (orders) {
    renderedOrders = orders?.map(order => (
      <OrderItem
        key={order.id}
        order={order}
        productAmount={totalProductAmount(order)}
        totalUsd={calculateTotal(products, order, 'USD')}
        totalUah={calculateTotal(products, order, 'UAH')}
        onClick={() => onOrderClick(order)}
        isOpenDetails={openDetails}
      />
    ));
  }

  return (
    <div className={listWrapperClasses}>
      <OrderDetails order={currentOrder} closeDetails={onCloseDetails} isVisible={openDetails} />
      <ul className={listClasses}>{renderedOrders}</ul>
    </div>
  );
};

export default OrderList;
