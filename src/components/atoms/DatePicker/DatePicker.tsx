import React from 'react';
import styles from './DatePicker.module.css';
import { formatDate } from '../../../utils';

interface DatePickerProps {
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange, name }) => (
  <input className={styles.datePicker} type='date' name={name} value={formatDate(value)} onChange={onChange} />
);

export default DatePicker;
