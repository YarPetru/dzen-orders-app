import React, { useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { getCurrentOrder, getOrders } from 'store/orders';
import { getProducts } from 'store/products';
import { setCurrentOrder } from 'store/orders/orders-slice';
import OrderItem from './OrderItem';
import OrderDetails from './OrderDetails';
import { Skeleton, Modal, Button } from 'components/common';
import { IOrder } from 'types';
import { calculateTotal, totalProductAmount } from 'helpers';
import AddButton from 'components/common/AddButton';

const OrderList: React.FC = () => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const listWrapperClasses = classNames('relative w-full items-start gap-6 ', {});
  const listClasses = classNames('flex flex-col gap-6 transition-all', {
    'w-full': !openDetails,
    'w-2/5': openDetails,
  });

  const dispatch = useAppDispatch();
  const { data: orders, isLoading, error } = useAppSelector(getOrders);
  const { data: products } = useAppSelector(getProducts);

  const currentOrder = useAppSelector(getCurrentOrder);

  const handleOpenDetails = (current: IOrder) => {
    if (openDetails) {
      setOpenDetails(false);
      dispatch(setCurrentOrder(null));
    } else {
      setOpenDetails(!openDetails);
      dispatch(setCurrentOrder(current));
    }
  };

  const handleDeleteOrder = (current: IOrder) => {
    dispatch(setCurrentOrder(current));
    setOpenModal(true);
  };

  const onCloseDetails = () => {
    setOpenDetails(false);
    dispatch(setCurrentOrder(null));
  };

  const onDeleteConfirmClick = () => {
    alert('Delete from DB');
    setOpenModal(false);
  };

  const closeModal = () => {
    setOpenModal(false);
    dispatch(setCurrentOrder(null));
  };

  let renderedOrders;

  if (isLoading) {
    renderedOrders = <Skeleton times={3} flexCol className="h-[94px] w-full" />;
  } else if (error) {
    renderedOrders = <h2>Something went wrong...{error}</h2>;
  } else if (orders) {
    renderedOrders = orders?.map(order => (
      <OrderItem
        key={order._id}
        order={order}
        productAmount={totalProductAmount(products, order)}
        totalUsd={calculateTotal(products, order, 'USD')}
        totalUah={calculateTotal(products, order, 'UAH')}
        handleOpenDetails={() => handleOpenDetails(order)}
        handleDeleteOrder={() => handleDeleteOrder(order)}
        isOpenDetails={openDetails}
      />
    ));
  }

  return (
    <>
      <header className="mb-10 flex-row-aligned gap-6">
        <AddButton />
        <h2 className="text-left">Orders / {orders.length}</h2>
      </header>

      <div className={listWrapperClasses}>
        <ul className={listClasses}>{renderedOrders}</ul>
        <OrderDetails order={currentOrder} closeDetails={onCloseDetails} isVisible={openDetails} />
      </div>
      <Modal isOpen={openModal} onClose={closeModal}>
        <h2>Are you shure?</h2>
        <div className="mt-6 flex items-center gap-10">
          <Button onClick={onDeleteConfirmClick}>Delete</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </div>
      </Modal>
    </>
  );
};

export default OrderList;
