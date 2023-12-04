import React from 'react';

interface FilterSelectProps {
  items: string[];
  name?: string;
  id?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
  showAll?: boolean;
}

const Select: React.FC<FilterSelectProps> = ({ items, name, id, onChange, value, showAll = true }) => {
  return (
    <select name={name} id={id} value={value} onChange={onChange}>
      {(!value || value === '') && <option value=''>{showAll ? 'All Items' : 'Select an Item'}</option>}
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
