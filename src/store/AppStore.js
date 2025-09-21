
import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './ordersSlice';

const applicationStore = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export default applicationStore;
