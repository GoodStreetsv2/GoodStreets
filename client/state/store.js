import { configureStore } from '@reduxjs/toolkit';
import pinReducer from './reducer';

export const store = configureStore({
  reducer: {
    pin: pinReducer,
  },
});
