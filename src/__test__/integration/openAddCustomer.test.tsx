import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { CustomerInterface } from '../../interfaces';
import { CustomersList } from '../../components';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import * as customerDataHook from '../../hooks/useCustomerData';

interface UseCustomerDataReturnType {
  isLoading: boolean;
  customers: CustomerInterface[];
  error: FetchBaseQueryError | SerializedError | undefined | string;
}

describe('integration test to open add a new customer modal from customer list and change the name', () => {
  let useCustomerDataMock: jest.Mock<UseCustomerDataReturnType>;

  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
    useCustomerDataMock = jest.spyOn(customerDataHook, 'default') as unknown as jest.Mock<UseCustomerDataReturnType>;
    useCustomerDataMock.mockReturnValue({ isLoading: false, customers: [], error: undefined });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  test('opens a new customer modal from customers list and changing name field', async () => {
    render(
      <Provider store={store}>
        <CustomersList />
      </Provider>,
    );

    fireEvent.click(screen.getByRole('button', { name: /add a new customer/i }));

    fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: 'New Test Company' } });

    expect(screen.getByDisplayValue('New Test Company')).toBeInTheDocument();
  });
});
