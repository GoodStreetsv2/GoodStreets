import { configureStore } from '@reduxjs/toolkit';
import pinReducer from './pinSlice.js';
import categorySlice from './categorySlice.js';
import formSlice from './formSlice.js';

export const store = configureStore({
  reducer: {
    pin: pinReducer,
    category: categorySlice,
    form: formSlice,
  },
});
   