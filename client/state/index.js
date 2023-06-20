import { configureStore } from '@reduxjs/toolkit';
import pinReducer from 'Z/pinSlice.js';
import  categorySlice from 'Z/categorySlice.js';

export const store = configureStore({
  reducer: {
     pin: pinReducer,
    category: categorySlice,
  },
});
   