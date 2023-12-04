import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CustomerDetails from '../CustomerDetails';

const mockStore = configureStore([]);
const store = mockStore({
  customers: {
    list: [
      {
        id: '1',
        isActive: true,
        company: 'Test Company',
        industry: 'Technology',
        projects: [],
        about: 'About',
      },
    ],
  },
});

describe('CustomerDetails Component', () => {
  const mockOnSave = jest.fn();
  const mockIndustries = ['Technology', 'Finance', 'Healthcare'];

  beforeEach(() => {
    mockOnSave.mockClear();
  });

  test('renders with initial data', () => {
    render(
      <Provider store={store}>
        <CustomerDetails customerId='1' onSave={mockOnSave} industries={mockIndustries} />
      </Provider>,
    );

    expect(screen.getByPlaceholderText('Name')).toHaveValue('Test Company');
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  test('handles form submission', () => {
    render(
      <Provider store={store}>
        <CustomerDetails customerId='1' onSave={mockOnSave} industries={mockIndustries} />
      </Provider>,
    );

    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'New Company' } });
    fireEvent.submit(screen.getByText('Save'));

    expect(mockOnSave).toHaveBeenCalledWith(expect.objectContaining({ company: 'New Company' }));
  });
});
