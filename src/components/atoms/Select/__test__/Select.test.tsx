import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Select from '../Select';

describe('Select Component', () => {
  const testItems = ['Item 1', 'Item 2', 'Item 3'];

  test('renders the select with all options', () => {
    render(<Select items={testItems} onChange={() => {}} value='' />);
    expect(screen.getByRole('option', { name: 'All Items' })).toBeInTheDocument();
    testItems.forEach((item) => {
      expect(screen.getByRole('option', { name: item })).toBeInTheDocument();
    });
  });

  test('does not show "All Items" when showAll is false', () => {
    render(<Select items={testItems} onChange={() => {}} value='' showAll={false} />);
    expect(screen.queryByRole('option', { name: 'All Items' })).toBeNull();
  });

  test('calls onChange prop when a new item is selected', () => {
    const handleChange = jest.fn();
    render(<Select items={testItems} onChange={handleChange} value='Item 1' />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Item 2' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
