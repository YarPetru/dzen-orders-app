import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';
import { IOrder } from 'types';

axios.defaults.baseURL = 'https://dzen-orders-back.onrender.com/api/';

export const fetchOrders = createAsyncThunk('orders/fetch', async () => {
  const res = await axios.get('/orders');

  return res.data;
});

export const addOrder = createAsyncThunk(
  'orders/add',
  async (order: IOrder, { rejectWithValue }) => {
    try {
      const response = await axios.post('/orders', order);
      toast.success(`New order ${order.title} has successfully added`, {
        toastId: nanoid(),
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.warn(`Something went wrong. Error: ${error.response?.data.message}`, {
          toastId: nanoid(),
        });
      } else {
        toast.warn(`Something went wrong. Error: ${error}`, {
          toastId: nanoid(),
        });
      }
      return rejectWithValue(error);
    }
  }
);

export const removeOrder = createAsyncThunk(
  'orders/remove',
  async (order: IOrder, { rejectWithValue }) => {
    try {
      await axios.delete(`orders/${order._id}`);
      toast.success(`Order ${order.title} has successfully deleted`, {
        toastId: nanoid(),
      });
      return order;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.warn(`Something went wrong. Error: ${error.response?.data.message}`, {
          toastId: nanoid(),
        });
      } else {
        toast.warn(`Something went wrong. Error: ${error}`, {
          toastId: nanoid(),
        });
      }
      return rejectWithValue(error);
    }
  }
);
