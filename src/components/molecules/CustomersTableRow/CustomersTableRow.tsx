import React from 'react';
import { Button } from '../../../components';

interface CustomerRowProps {
  name: string;
  industry: string;
  about: string;
  isActive: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const CustomersTableRow: React.FC<CustomerRowProps> = ({ name, industry, about, isActive, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{industry}</td>
      <td>{about}</td>
      <td>{isActive ? 'Active' : 'Inactive'}</td>
      <td>
        <Button
          onClick={onDelete}
          type='delete'
          disabled={isActive}
          title={isActive ? 'Customer is active, cannot delete' : 'Delete'}
        >
          Delete
        </Button>
        <Button onClick={onEdit} type='edit'>
          Edit Details
        </Button>
      </td>
    </tr>
  );
};

export default CustomersTableRow;
