import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from '../Checkbox';

describe('Checkbox Component', () => {
  test('renders the checkbox', () => {
    render(<Checkbox name='testCheckbox' />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('calls onChange prop when clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox name='testCheckbox' onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
