import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerInterface } from '../../interfaces';

interface CustomersState {
  list: CustomerInterface[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: CustomersState = {
  list: [],
  status: 'idle',
  error: null,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setCustomers: (state, action: PayloadAction<CustomerInterface[]>) => {
      state.list = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
    addCustomer: (state, action: PayloadAction<CustomerInterface>) => {
      state.list.unshift(action.payload);
    },
    updateCustomer: (state, action: PayloadAction<CustomerInterface>) => {
      const index = state.list.findIndex((customer) => customer.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteCustomer: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((customer) => customer.id !== action.payload);
    },
  },
});

export const { deleteCustomer, setCustomers, addCustomer, updateCustomer } = customersSlice.actions;

export default customersSlice.reducer;
