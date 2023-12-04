import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CustomerEditor from '../CustomerEditor';

describe('CustomerEditor Component', () => {
  const mockCustomer = {
    id: '1',
    isActive: true,
    company: 'Test Company',
    industry: 'Technology',
    projects: [],
    about: 'About the company',
  };
  const mockIndustries = ['Technology', 'Finance', 'Healthcare'];
  const mockOnChange = jest.fn();

  test('renders with customer data', () => {
    render(<CustomerEditor customer={mockCustomer} onChange={mockOnChange} industries={mockIndustries} />);
    expect(screen.getByPlaceholderText('Name')).toHaveValue(mockCustomer.company);
    expect(screen.getByPlaceholderText('About the Company')).toHaveValue(mockCustomer.about);
  });

  test('handles input changes', () => {
    render(<CustomerEditor customer={mockCustomer} onChange={mockOnChange} industries={mockIndustries} />);

    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'New Company' } });
    fireEvent.change(screen.getByPlaceholderText('About the Company'), { target: { value: 'New About' } });

    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });
});
