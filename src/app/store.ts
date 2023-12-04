import { configureStore } from '@reduxjs/toolkit';
import { customersApi } from '../features/customers';
import customersReducer from '../features/customers/customersSlice';

export const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
    customers: customersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
