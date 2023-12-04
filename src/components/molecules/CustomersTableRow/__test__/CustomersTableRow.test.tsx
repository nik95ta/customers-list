import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomersTableRow from '../CustomersTableRow';

describe('CustomersTableRow Component', () => {
  const mockName = 'John Doe';
  const mockIndustry = 'Technology';
  const mockAbout = 'About John';
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  test('renders with customer data', () => {
    render(
      <table>
        <tbody>
          <CustomersTableRow
            name={mockName}
            industry={mockIndustry}
            about={mockAbout}
            isActive={true}
            onEdit={mockOnEdit}
            onDelete={mockOnDelete}
          />
        </tbody>
      </table>,
    );

    expect(screen.getByText(mockName)).toBeInTheDocument();
    expect(screen.getByText(mockIndustry)).toBeInTheDocument();
    expect(screen.getByText(mockAbout)).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  test('calls onEdit when Edit button is clicked', () => {
    render(
      <table>
        <tbody>
          <CustomersTableRow
            name={mockName}
            industry={mockIndustry}
            about={mockAbout}
            isActive={true}
            onEdit={mockOnEdit}
            onDelete={mockOnDelete}
          />
        </tbody>
      </table>,
    );

    fireEvent.click(screen.getByText('Edit Details'));
    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });

  test('allows delete when customer is inactive', () => {
    render(
      <table>
        <tbody>
          <CustomersTableRow
            name={mockName}
            industry={mockIndustry}
            about={mockAbout}
            isActive={false}
            onEdit={mockOnEdit}
            onDelete={mockOnDelete}
          />
        </tbody>
      </table>,
    );

    const deleteButton = screen.getByTitle('Delete');
    expect(deleteButton).not.toBeDisabled();
    fireEvent.click(deleteButton);
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });
});
