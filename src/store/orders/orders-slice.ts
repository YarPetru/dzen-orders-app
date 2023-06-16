import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder } from 'types';
import { fetchOrders } from 'store/orders/orders-thunks';

interface OrdersState {
  data: IOrder[];
  isLoading: boolean;
  error: string | null;
  currenOrder: IOrder | null;
}
const initialState: OrdersState = {
  data: [],
  isLoading: false,
  error: null,
  currenOrder: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setCurrentOrder: (state, action: PayloadAction<IOrder | null>) => {
      state.currenOrder = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchOrders.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action: PayloadAction<IOrder[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload ? String(action.payload) : 'Unknown error';
    });
  },
});

export const { setCurrentOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
