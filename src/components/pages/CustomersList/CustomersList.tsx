import React, { useState } from 'react';
import { CustomersListHeader } from '../../../components';
import styles from './CustomersList.module.css';

const CustomersList: React.FC = () => {
  const [, setFilter] = useState<string>('');

  return (
    <div className={styles.container}>
      <CustomersListHeader onAddCustomer={() => console.log('on add')} onChangeFilter={setFilter} industries={[]} />
    </div>
  );
};

export default CustomersList;
