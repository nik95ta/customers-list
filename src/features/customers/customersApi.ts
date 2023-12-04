import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CustomerInterface } from '../../interfaces';

const BASE_URL = 'https://parloafrontendchallenge.z6.web.core.windows.net/';

export const customersApi = createApi({
  reducerPath: 'customersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCustomers: builder.query<CustomerInterface[], void>({
      query: () => `customers.json`,
    }),
  }),
});

export const { useGetCustomersQuery } = customersApi;
