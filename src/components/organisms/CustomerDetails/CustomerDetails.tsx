import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { CustomerInterface, ProjectInterface } from '../../../interfaces';
import { Button, CustomerEditor, ProjectsList } from '../../../components';
import { RootState } from '../../../app/store';

const emptyCustomer = {
  id: '',
  isActive: false,
  company: '',
  industry: '',
  projects: [],
  about: '',
};

interface CustomerFormProps {
  customerId: string | null;
  onSave: (customer: CustomerInterface) => void;
  industries: string[];
}

const CustomerDetails: React.FC<CustomerFormProps> = ({ customerId, onSave, industries }) => {
  const customers = useSelector((state: RootState) => state.customers.list);

  const customerDetails = useMemo(() => {
    return customerId ? customers.find((customer) => customer.id === customerId) || emptyCustomer : emptyCustomer;
  }, [customerId, customers]);

  const [details, setDetails] = useState<CustomerInterface>(customerDetails);

  useEffect(() => {
    setDetails(customerDetails);
  }, [customerDetails]);

  const handleChange = (updatedData: Partial<CustomerInterface>) => {
    setDetails((prevDetails) => ({ ...prevDetails, ...updatedData }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(details);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomerEditor
        customer={details}
        onChange={(customer: CustomerInterface) => handleChange(customer)}
        industries={industries}
      />
      <ProjectsList
        projects={details.projects}
        onChange={(projects: ProjectInterface[]) => handleChange({ projects })}
      />
      <Button type='submit'>Save</Button>
    </form>
  );
};

export default CustomerDetails;
