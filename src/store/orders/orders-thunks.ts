import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9999/api/';

export const fetchOrders = createAsyncThunk('orders/fetch', async () => {
  const res = await axios.get('/orders');

  return res.data;
});
