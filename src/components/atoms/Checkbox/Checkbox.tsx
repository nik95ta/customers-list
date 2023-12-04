import React from 'react';

interface CheckboxProps {
  name: string;
  value?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, name, value }) => (
  <input type='checkbox' checked={value} name={name} onChange={onChange} />
);

export default Checkbox;
