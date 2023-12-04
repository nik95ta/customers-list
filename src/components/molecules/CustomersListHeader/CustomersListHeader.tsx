import React from 'react';
import { Button, Select } from '../../atoms';

interface CustomersListHeaderProps {
  onAddCustomer: () => void;
  onChangeFilter: (filter: string) => void;
  industries: string[];
}

const CustomersListHeader: React.FC<CustomersListHeaderProps> = ({ industries, onChangeFilter, onAddCustomer }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor='industryFilter'>Filter by Industry:</label>
      <Select id='industryFilter' items={industries} onChange={handleFilterChange} />
      <Button type='add' onClick={onAddCustomer}>
        Add a New Customer
      </Button>
    </div>
  );
};

export default CustomersListHeader;
