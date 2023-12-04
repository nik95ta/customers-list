import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ProjectsList from '../ProjectsList';

describe('ProjectsList Component', () => {
  const mockProjects = [
    { id: '1', name: 'Project 1', contact: 'contact1@example.com', start_date: '2021-01-01', end_date: '2021-12-31' },
    { id: '2', name: 'Project 2', contact: 'contact2@example.com', start_date: '2022-01-01', end_date: '2022-12-31' },
  ];
  const mockOnChange = jest.fn();

  test('renders projects list with provided data', () => {
    render(<ProjectsList projects={mockProjects} onChange={mockOnChange} />);

    expect(screen.getByDisplayValue('Project 1')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Project 2')).toBeInTheDocument();
  });

  test('adds a new project when add button is clicked', () => {
    render(<ProjectsList projects={mockProjects} onChange={mockOnChange} />);

    fireEvent.click(screen.getByText('Add a New Project'));
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Array)); // Check if onChange is called with an array
  });

  test('removes a project when remove button is clicked', () => {
    render(<ProjectsList projects={mockProjects} onChange={mockOnChange} />);

    fireEvent.click(screen.getAllByText('Remove')[0]);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Array));
  });
});
