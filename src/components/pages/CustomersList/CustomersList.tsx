import React, { useMemo, useState } from 'react';
import { CustomerInterface } from '../../../interfaces';
import { CustomerDetails, CustomersListHeader, CustomersTable, Modal } from '../../../components';
import styles from './CustomersList.module.css';
import customers from '../../../customers.json';

const CustomersList: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
    setIsModalOpen(true);
  };

  const handleDeleteCustomer = (id: string) => {
    if (window.confirm('Are you sure to delete?')) {
      console.log('Delete Id', id);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCustomerId(null);
  };

  const handleSaveCustomer = (customer: CustomerInterface) => {
    if (customer.id) {
      console.log('in edit mode');
    } else {
      console.log('in add mode');
    }
    handleCloseModal();
  };

  const handleAddCustomer = () => {
    setSelectedCustomerId(null);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <CustomersListHeader onAddCustomer={handleAddCustomer} onChangeFilter={setFilter} industries={uniqueIndustries} />
      <CustomersTable customers={filteredCustomers} onEdit={handleEditCustomer} onDelete={handleDeleteCustomer} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <CustomerDetails customerId={selectedCustomerId} onSave={handleSaveCustomer} industries={uniqueIndustries} />
      </Modal>
    </div>
  );
};

export default CustomersList;
