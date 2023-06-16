import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import OrderItem from './OrderItem';
import OrderDetails from './OrderDetails';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchOrders, getCurrentOrder, getOrders } from 'store/orders';
import { IOrder } from 'types';
import { setCurrentOrder } from 'store/orders/orders-slice';

const OrderList: React.FC = () => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const listWrapperClasses = classNames('relative w-full items-start gap-6 ', {});
  const listClasses = classNames('flex flex-col gap-6 transition-all', {
    'w-full': !openDetails,
    'w-2/5': openDetails,
  });

  const dispatch = useAppDispatch();
  const { data: orders, isLoading, error } = useAppSelector(getOrders);
  const currentOrder = useAppSelector(getCurrentOrder);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

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

  let renderedOrders;

  if (isLoading) {
    renderedOrders = <h2>Loading...</h2>;
  } else if (error) {
    renderedOrders = <h2>Something went wrong...{error}</h2>;
  } else if (orders) {
    renderedOrders = orders?.map(order => (
      <OrderItem
        key={order.id}
        order={order}
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
