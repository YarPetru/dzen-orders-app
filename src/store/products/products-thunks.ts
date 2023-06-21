import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';
import { IProduct } from 'types';
import BASE_URL from 'constants';

axios.defaults.baseURL = String(BASE_URL);

export const fetchProducts = createAsyncThunk('prodducts/fetch', async () => {
  const res = await axios.get('/products');
  return res.data;
});

export const addProduct = createAsyncThunk(
  'products/add',
  async (product: IProduct, { rejectWithValue }) => {
    try {
      const response = await axios.post('/products', product);
      toast.success(`New product ${product.title} has successfully added`, {
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

export const removeProduct = createAsyncThunk(
  'products/remove',
  async (product: IProduct, { rejectWithValue }) => {
    try {
      await axios.delete(`products/${product._id}`);
      toast.success(`Product ${product.title} has successfully deleted`, {
        toastId: nanoid(),
      });
      return product;
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
