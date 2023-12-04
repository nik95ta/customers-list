import React, { useMemo, useState } from 'react';
import { CustomerInterface } from '../../../interfaces';
import { CustomersListHeader, CustomersTable } from '../../../components';
import styles from './CustomersList.module.css';
import customers from '../../../customers.json';

const CustomersList: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [, setSelectedCustomerId] = useState<string | null>(null);

  const filteredCustomers = useMemo(
    () => customers?.filter((customer: CustomerInterface) => (filter ? customer.industry === filter : true)) || [],
    [customers, filter],
  );

  const uniqueIndustries = useMemo(
    () => [...new Set(customers.map((customer: CustomerInterface) => customer.industry))],
    [customers],
  );

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
      <CustomersListHeader onAddCustomer={handleAddCustomer} onChangeFilter={setFilter} industries={uniqueIndustries} />
      <CustomersTable customers={filteredCustomers} onEdit={handleEditCustomer} onDelete={handleDeleteCustomer} />
    </div>
  );
};

export default CustomersList;
