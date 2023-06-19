import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'types';
import { fetchProducts } from './products-thunks';

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
  },
});

export default productsSlice.reducer;
