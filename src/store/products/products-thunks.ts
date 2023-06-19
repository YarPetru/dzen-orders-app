import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://dzen-orders-back.onrender.com/api/';

export const fetchProducts = createAsyncThunk('prodducts/fetch', async () => {
  const res = await axios.get('/products');
  return res.data;
});
