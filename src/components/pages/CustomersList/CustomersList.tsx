import React, { useState } from 'react';
import { CustomersListHeader, CustomersTable } from '../../../components';
import styles from './CustomersList.module.css';
import filteredCustomers from '../../../customers.json';

const CustomersList: React.FC = () => {
  const [, setFilter] = useState<string>('');
  const [, setSelectedCustomerId] = useState<string | null>(null);

  const handleEditCustomer = (id: string) => {
    setSelectedCustomerId(id);
  };

  const handleDeleteCustomer = (id: string) => {
    if (window.confirm('Are you sure to delete?')) {
      console.log('Delete Id', id);
    }
  };

  const handleAddCustomer = () => {
    setSelectedCustomerId(null);
  };

  return (
    <div className={styles.container}>
      <CustomersListHeader onAddCustomer={handleAddCustomer} onChangeFilter={setFilter} industries={[]} />
      <CustomersTable customers={filteredCustomers} onEdit={handleEditCustomer} onDelete={handleDeleteCustomer} />
    </div>
  );
};

export default CustomersList;
