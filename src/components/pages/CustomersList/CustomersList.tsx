import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer, deleteCustomer, updateCustomer } from '../../../features/customers';
import { CustomerInterface } from '../../../interfaces';
import { useCustomerData } from '../../../hooks';
import { CustomerDetails, CustomersListHeader, CustomersTable, Modal } from '../../../components';
import { getUniqueId } from '../../../utils';
import styles from './CustomersList.module.css';

const CustomersList: React.FC = () => {
  const dispatch = useDispatch();
  const { customers, error, isLoading } = useCustomerData();
  const [filter, setFilter] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

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
      dispatch(deleteCustomer(id));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCustomerId(null);
  };

  const handleSaveCustomer = (customer: CustomerInterface) => {
    if (customer.id) {
      dispatch(updateCustomer(customer));
    } else {
      dispatch(addCustomer({ ...customer, id: getUniqueId() }));
    }
    handleCloseModal();
  };

  const handleAddCustomer = () => {
    setSelectedCustomerId(null);
    setIsModalOpen(true);
  };

  if (error) return <p>Error: {String(error)}</p>;

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

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
