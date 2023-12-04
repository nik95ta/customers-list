import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DatePicker from '../DatePicker';
import { formatDate } from '../../../../utils';

describe('DatePicker Component', () => {
  test('renders the date picker', () => {
    render(<DatePicker name='testDate' value='2021-01-01' onChange={() => {}} />);
    const datePicker = screen.getByDisplayValue(formatDate('2021-01-01'));
    expect(datePicker).toBeInTheDocument();
  });

  test('displays the formatted date correctly', () => {
    const testDate = '2021-01-01';
    render(<DatePicker name='testDate' value={testDate} onChange={() => {}} />);
    expect(screen.getByDisplayValue(formatDate(testDate))).toBeInTheDocument();
  });

  test('calls onChange prop when date is changed', () => {
    const handleChange = jest.fn();
    const testDate = '2021-01-01';
    render(<DatePicker name='testDate' value={testDate} onChange={handleChange} />);
    const datePicker = screen.getByDisplayValue(formatDate(testDate));

    fireEvent.change(datePicker, { target: { value: '2021-01-02' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
