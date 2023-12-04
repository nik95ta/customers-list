import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import configureMockStore from 'redux-mock-store';
import CustomersList from '../CustomersList';
import { CustomerInterface } from '../../../../interfaces';
import * as customerDataHook from '../../../../hooks/useCustomerData';

const mockStore = configureMockStore();
const store = mockStore({});

interface UseCustomerDataReturnType {
  isLoading: boolean;
  customers: CustomerInterface[];
  error: FetchBaseQueryError | SerializedError | undefined | string;
}

describe('CustomersList Component', () => {
  let useCustomerDataMock: jest.Mock<UseCustomerDataReturnType>;

  beforeEach(() => {
    useCustomerDataMock = jest.spyOn(customerDataHook, 'default') as unknown as jest.Mock<UseCustomerDataReturnType>;
    useCustomerDataMock.mockReturnValue({ isLoading: false, customers: [], error: undefined });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders loading state', () => {
    useCustomerDataMock.mockReturnValue({ isLoading: true, customers: [], error: undefined });

    render(
      <Provider store={store}>
        <CustomersList />
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error state', () => {
    // @ts-ignore
    useCustomerDataMock.mockReturnValue({
      isLoading: false,
      customers: [],
      error: 'Error',
    });

    render(
      <Provider store={store}>
        <CustomersList />
      </Provider>,
    );

    expect(screen.getByText('Error: Error')).toBeInTheDocument();
  });

  test('renders with customers data', () => {
    const mockCustomers = [
      {
        id: '1',
        company: 'Test Company',
        industry: 'Tech',
        about: 'About',
        isActive: true,
        projects: [],
      },
    ];
    useCustomerDataMock.mockReturnValue({
      isLoading: false,
      customers: mockCustomers,
      error: undefined,
    });

    render(
      <Provider store={store}>
        <CustomersList />
      </Provider>,
    );

    expect(screen.getByText('Test Company')).toBeInTheDocument();
  });
});
