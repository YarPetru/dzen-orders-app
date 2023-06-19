import { RootState } from 'store';

export const getOrders = (state: RootState) => state.orders;
export const getCurrentOrder = (state: RootState) => state.orders.currenOrder;
