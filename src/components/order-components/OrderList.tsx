import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import OrderItem from './OrderItem';
import OrderDetails from './OrderDetails';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { fetchOrders, getOrders } from 'store/orders';

const OrderList: React.FC = () => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const listWrapperClasses = classNames('w-full flex items-start gap-6 ', {});
  const listClasses = classNames('w-full flex flex-col gap-6 transition-all', {
    'w-1/2': openDetails,
  });

  const dispatch = useAppDispatch();
  const { data: orders, isLoading, error } = useAppSelector(getOrders);
  console.log(orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className={listWrapperClasses}>
      <ul className={listClasses}>
        <OrderItem onClick={() => setOpenDetails(!openDetails)} isOpenDetails={openDetails} />
        <OrderItem onClick={() => setOpenDetails(!openDetails)} isOpenDetails={openDetails} />
        <OrderItem onClick={() => setOpenDetails(!openDetails)} isOpenDetails={openDetails} />
      </ul>
      {openDetails && <OrderDetails closeDetails={() => setOpenDetails(false)} />}
    </div>
  );
};

export default OrderList;
