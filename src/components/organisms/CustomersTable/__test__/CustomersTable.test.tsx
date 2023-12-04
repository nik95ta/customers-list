import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CustomersTable from '../CustomersTable';

describe('CustomersTable Component', () => {
  const mockCustomers = [
    { id: '1', company: 'Company One', industry: 'Tech', about: 'About One', isActive: true, projects: [] },
    { id: '2', company: 'Company Two', industry: 'Finance', about: 'About Two', isActive: false, projects: [] },
  ];
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  test('renders customers table with provided data', () => {
    render(<CustomersTable customers={mockCustomers} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    expect(screen.getByText('Company One')).toBeInTheDocument();
    expect(screen.getByText('Company Two')).toBeInTheDocument();
    expect(screen.getAllByText('Edit Details').length).toBe(mockCustomers.length);
    expect(screen.getAllByText('Delete').length).toBe(mockCustomers.length);
  });

  test('calls onEdit and onDelete with correct id', () => {
    render(<CustomersTable customers={mockCustomers} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    // Trigger actions for the second customer
    fireEvent.click(screen.getAllByText('Edit Details')[1]);
    fireEvent.click(screen.getAllByText('Delete')[1]);

    expect(mockOnEdit).toHaveBeenCalledWith('2');
    expect(mockOnDelete).toHaveBeenCalledWith('2');
  });
});
