import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TextArea from '../TextArea';

describe('TextArea Component', () => {
  test('renders textarea with correct properties', () => {
    const testValue = 'Test text';
    const testName = 'testName';
    const testPlaceholder = 'Enter text here';

    render(<TextArea value={testValue} name={testName} placeholder={testPlaceholder} onChange={() => {}} />);

    const textarea = screen.getByPlaceholderText(testPlaceholder);
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('name', testName);
    expect(textarea).toHaveValue(testValue);
  });

  test('calls onChange prop when text changes', () => {
    const handleChange = jest.fn();
    const testPlaceholder = 'Enter text here';

    render(<TextArea value='' name='testName' placeholder={testPlaceholder} onChange={handleChange} />);

    const textarea = screen.getByPlaceholderText(testPlaceholder);
    fireEvent.change(textarea, { target: { value: 'New text' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
