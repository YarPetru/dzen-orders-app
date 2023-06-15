import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { ordersReducer } from './orders';
import { productsReducer } from './products';

const rootReducer = combineReducers({
  orders: ordersReducer,
  products: productsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
