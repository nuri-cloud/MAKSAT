import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';
import iphone16Reducer from './iphone16/iphone16Slice';

export const store = configureStore({
  reducer: {
    products: categoryReducer,
    iphone16: iphone16Reducer,
  },
});