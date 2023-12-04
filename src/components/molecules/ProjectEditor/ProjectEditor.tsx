import React, { ChangeEvent, FC } from 'react';
import { ProjectInterface } from '../../../interfaces';
import { Button, DatePicker, TextField } from '../../../components';
import styles from './ProjectEditor.module.css';

interface ProjectFormProps {
  project: ProjectInterface;
  onProjectChange: (project: ProjectInterface) => void;
  onRemoveProject: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProjectEditor: FC<ProjectFormProps> = ({ project, onProjectChange, onRemoveProject }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    let updatedValue = value;
    if (type === 'date' && value) {
      updatedValue = new Date(value).toISOString();
    }
    if (name === 'end_date' && project.start_date && new Date(updatedValue) < new Date(project.start_date)) {
      alert('End date cannot be before the start date');
      return;
    }

    if (name === 'start_date' && project.end_date && new Date(project.end_date) < new Date(updatedValue)) {
      alert('Start date cannot be after the end date');
      return;
    }
    onProjectChange({ ...project, [name]: updatedValue });
  };

  return (
    <>
      <div>
        <div className={styles.form}>
          <label>
            Project Name:
            <TextField value={project.name} name='name' placeholder='Project Name' onChange={handleInputChange} />
          </label>
          <label>
            Contact:
            <TextField value={project.contact} name='contact' placeholder='Email' onChange={handleInputChange} />
          </label>
          <label>
            Start:
            <DatePicker name='start_date' value={project.start_date} onChange={handleInputChange} />
          </label>
          <label>
            End:
            <DatePicker name='end_date' value={project.end_date} onChange={handleInputChange} />
          </label>
        </div>
        <Button onClick={onRemoveProject} type='delete'>
          Remove
        </Button>
      </div>
      <hr />
    </>
  );
};

export default ProjectEditor;
