import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CustomersListHeader from '../CustomersListHeader';

describe('CustomersListHeader Component', () => {
  const mockIndustries = ['Technology', 'Finance', 'Healthcare'];
  const mockOnChangeFilter = jest.fn();
  const mockOnAddCustomer = jest.fn();

  test('renders with industry select options', () => {
    render(
      <CustomersListHeader
        industries={mockIndustries}
        onChangeFilter={mockOnChangeFilter}
        onAddCustomer={mockOnAddCustomer}
      />,
    );

    expect(screen.getByText('Filter by Industry:')).toBeInTheDocument();
    mockIndustries.forEach((industry) => {
      expect(screen.getByRole('option', { name: industry })).toBeInTheDocument();
    });
  });

  test('calls onChangeFilter when a new industry is selected', () => {
    render(
      <CustomersListHeader
        industries={mockIndustries}
        onChangeFilter={mockOnChangeFilter}
        onAddCustomer={mockOnAddCustomer}
      />,
    );

    fireEvent.change(screen.getByRole('combobox'), { target: { value: mockIndustries[1] } });
    expect(mockOnChangeFilter).toHaveBeenCalledWith(mockIndustries[1]);
  });

  test('calls onAddCustomer when add button is clicked', () => {
    render(
      <CustomersListHeader
        industries={mockIndustries}
        onChangeFilter={mockOnChangeFilter}
        onAddCustomer={mockOnAddCustomer}
      />,
    );

    fireEvent.click(screen.getByText('Add a New Customer'));
    expect(mockOnAddCustomer).toHaveBeenCalledTimes(1);
  });
});
