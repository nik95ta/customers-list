import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from '../TableHeader';

describe('TableHeader Component', () => {
  const testItems = ['Header1', 'Header2', 'Header3'];

  test('renders table headers correctly', () => {
    render(
      <table>
        <thead>
          <TableHeader items={testItems} />
        </thead>
      </table>,
    );
    testItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
