import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '../TextField';

describe('TextField Component', () => {
  test('renders text field with correct properties', () => {
    const testValue = 'Test value';
    const testName = 'testName';
    const testPlaceholder = 'Enter text';

    render(<TextField value={testValue} name={testName} placeholder={testPlaceholder} onChange={() => {}} />);

    const textField = screen.getByPlaceholderText(testPlaceholder);
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveAttribute('name', testName);
    expect(textField).toHaveValue(testValue);
  });

  test('calls onChange prop when text changes', () => {
    const handleChange = jest.fn();
    const testPlaceholder = 'Enter text';

    render(<TextField value='' name='testName' placeholder={testPlaceholder} onChange={handleChange} />);

    const textField = screen.getByPlaceholderText(testPlaceholder);
    fireEvent.change(textField, { target: { value: 'New text' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
