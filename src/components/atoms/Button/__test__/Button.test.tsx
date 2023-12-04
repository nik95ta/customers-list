import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
  test('renders the button with the correct text', () => {
    render(<Button type='add'>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Button type='add' onClick={handleClick}>
        Click Me
      </Button>,
    );
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(
      <Button type='add' disabled>
        Click Me
      </Button>,
    );
    expect(screen.getByText('Click Me')).toBeDisabled();
  });

  test('has correct className based on type prop', () => {
    const { rerender } = render(<Button type='add'>Click Me</Button>);
    expect(screen.getByText('Click Me')).toHaveClass('add');

    rerender(<Button type='delete'>Click Me</Button>);
    expect(screen.getByText('Click Me')).toHaveClass('delete');
  });
});
