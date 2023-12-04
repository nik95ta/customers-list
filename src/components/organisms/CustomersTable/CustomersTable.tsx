import React from 'react';
import { CustomerInterface } from '../../../interfaces';
import { CustomersTableRow, TableHeader } from '../../../components';

interface CustomersTableProps {
  customers: CustomerInterface[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const CustomersTable: React.FC<CustomersTableProps> = ({ customers, onEdit, onDelete }) => (
  <>
    {customers && customers.length > 0 ? (
      <table>
        <thead>
          <TableHeader items={['Company', 'Industry', 'About', 'Status', 'Actions']} />
        </thead>
        <tbody>
          {customers.map((customer: CustomerInterface) => (
            <CustomersTableRow
              key={customer.id}
              name={customer.company}
              industry={customer.industry}
              about={customer.about}
              isActive={customer.isActive}
              onEdit={() => onEdit(customer.id)}
              onDelete={() => onDelete(customer.id)}
            />
          ))}
        </tbody>
      </table>
    ) : (
      <p>No Customer Data Available</p>
    )}
  </>
);

export default CustomersTable;
