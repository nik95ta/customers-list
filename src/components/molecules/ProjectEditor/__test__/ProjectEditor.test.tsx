import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ProjectEditor from '../ProjectEditor';

describe('ProjectEditor Component', () => {
  const mockProject = {
    id: '1',
    name: 'Test Project',
    contact: 'test@example.com',
    start_date: '2021-01-01',
    end_date: '2021-12-31',
  };
  const mockOnProjectChange = jest.fn();
  const mockOnRemoveProject = jest.fn();

  test('renders with project data', () => {
    render(
      <ProjectEditor
        project={mockProject}
        onProjectChange={mockOnProjectChange}
        onRemoveProject={mockOnRemoveProject}
      />,
    );

    expect(screen.getByPlaceholderText('Project Name')).toHaveValue(mockProject.name);
    expect(screen.getByPlaceholderText('Email')).toHaveValue(mockProject.contact);
    expect(screen.getByDisplayValue(mockProject.start_date)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockProject.end_date)).toBeInTheDocument();
  });

  test('calls onProjectChange when inputs change', () => {
    render(
      <ProjectEditor
        project={mockProject}
        onProjectChange={mockOnProjectChange}
        onRemoveProject={mockOnRemoveProject}
      />,
    );

    fireEvent.change(screen.getByPlaceholderText('Project Name'), { target: { value: 'New Project' } });
    expect(mockOnProjectChange).toHaveBeenCalledWith(expect.objectContaining({ name: 'New Project' }));
  });

  test('calls onRemoveProject when remove button is clicked', () => {
    render(
      <ProjectEditor
        project={mockProject}
        onProjectChange={mockOnProjectChange}
        onRemoveProject={mockOnRemoveProject}
      />,
    );

    fireEvent.click(screen.getByText('Remove'));
    expect(mockOnRemoveProject).toHaveBeenCalledTimes(1);
  });
});
