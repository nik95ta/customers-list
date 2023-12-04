import React, { ChangeEvent, useState } from 'react';
import { CustomerInterface } from '../../../interfaces';
import { Checkbox, Select, TextArea, TextField } from '../../../components';
import styles from './CustomerEditor.module.css';

interface CustomerFormProps {
  customer: CustomerInterface;
  onChange: (customer: CustomerInterface) => void;
  industries: string[];
}

const CustomerEditor: React.FC<CustomerFormProps> = ({ customer, onChange, industries }) => {
  const [addingNewIndustry, setAddingNewIndustry] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    onChange({ ...customer, [target.name]: value });
  };

  return (
    <>
      <div className={styles.formRow}>
        <label className={styles.fullWidth}>
          Company:
          <TextField value={customer.company} name='company' placeholder='Name' onChange={handleInputChange} />
        </label>
        <label>
          Add New Industry:
          <Checkbox name='isActive' onChange={() => setAddingNewIndustry(!addingNewIndustry)} />
        </label>
        <label>
          Industry:
          {addingNewIndustry ? (
            <TextField
              value={customer.industry}
              name='industry'
              placeholder='New Industry'
              onChange={handleInputChange}
            />
          ) : (
            <Select
              name='industry'
              items={industries}
              value={customer.industry}
              onChange={handleInputChange}
              showAll={false}
            />
          )}
        </label>
        <label>
          Active:
          <Checkbox value={customer.isActive} name='isActive' onChange={handleInputChange} />
        </label>
      </div>
      <div className={styles.aboutInput}>
        <label className={styles.label}>
          About:
          <TextArea value={customer.about} name='about' placeholder='About the Company' onChange={handleInputChange} />
        </label>
      </div>
    </>
  );
};

export default CustomerEditor;
