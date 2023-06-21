import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { getCurrentOrder, getOrders, fetchOrders, removeOrder } from 'store/orders';
import { getProducts, fetchProducts } from 'store/products';
import { setCurrentOrder } from 'store/orders/orders-slice';
import OrderItem from './OrderItem';
import OrderDetails from './OrderDetails';
import { Skeleton, Modal, AddButton, DeleteConfirmation } from 'components/common';
import { IOrder } from 'types';
import { calculateTotal, totalProductAmount } from 'helpers';
import AddOrderForm from './AddOrderForm';

const OrderList: React.FC = () => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

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
    setOpenDeleteModal(true);
  };

  const onCloseDetails = () => {
    setOpenDetails(false);
    dispatch(setCurrentOrder(null));
  };

  const onDeleteConfirmClick = async () => {
    await dispatch(removeOrder(currentOrder!));
    setOpenDeleteModal(false);
    dispatch(setCurrentOrder(null));
  };

  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
    dispatch(setCurrentOrder(null));
  };

  const closeAddModal = () => {
    setOpenAddModal(false);
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

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <header className="mb-10 flex-row-aligned gap-6">
        <AddButton onClick={() => setOpenAddModal(true)} />
        <h2 className="text-left">Orders / {orders.length}</h2>
      </header>

      <div className={listWrapperClasses}>
        <ul className={listClasses}>{renderedOrders}</ul>
        <OrderDetails order={currentOrder} closeDetails={onCloseDetails} isVisible={openDetails} />
      </div>

      <Modal isOpen={openDeleteModal} onClose={closeDeleteModal}>
        <DeleteConfirmation
          isPending={isLoading}
          onDeleteConfirmClick={onDeleteConfirmClick}
          closeDeleteModal={closeDeleteModal}
        />
      </Modal>

      <Modal isOpen={openAddModal} onClose={closeAddModal}>
        <AddOrderForm closeModal={closeAddModal} />
      </Modal>
    </>
  );
};

export default OrderList;
