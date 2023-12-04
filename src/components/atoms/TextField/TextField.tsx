import React from 'react';
import styles from './TextField.module.css';

interface TextFieldProps {
  value: string;
  name: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField: React.FC<TextFieldProps> = ({ value, onChange, name, placeholder }) => (
  <input type='text' className={styles.input} name={name} value={value} onChange={onChange} placeholder={placeholder} />
);

export default TextField;
