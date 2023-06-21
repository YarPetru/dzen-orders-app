import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'types';
import { fetchProducts, addProduct, removeProduct } from './products-thunks';

interface ProductssState {
  data: IProduct[];
  isLoading: boolean;
  error: string | null;
}
const initialState: ProductssState = {
  data: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? String(action.payload) : 'Unknown error';
    });

    builder.addCase(addProduct.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action: PayloadAction<IProduct>) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? String(action.payload) : 'Unknown error';
    });

    builder.addCase(removeProduct.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter(product => {
        return product._id !== action.payload._id;
      });
    });
    builder.addCase(removeProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? String(action.payload) : 'Unknown error';
    });
  },
});

export default productsSlice.reducer;
