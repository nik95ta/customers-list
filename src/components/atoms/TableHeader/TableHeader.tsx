import React from 'react';

interface TableHeaderProps {
  items: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ items }) => (
  <tr>
    {items.map((item: string, index: number) => (
      <th key={`${item}-${index}`}>{item}</th>
    ))}
  </tr>
);

export default TableHeader;
