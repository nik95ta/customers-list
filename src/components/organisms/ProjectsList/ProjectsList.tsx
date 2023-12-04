import React, { useCallback } from 'react';
import { ProjectInterface } from '../../../interfaces';
import { Button, ProjectEditor } from '../../../components';
import { getUniqueId, insertItemAtIndex, overrideListAtIndex, removeItemAtIndex } from '../../../utils';
import styles from './ProjectsList.module.css';

const emptyProject = {
  id: '',
  name: '',
  contact: '',
  start_date: '',
  end_date: '',
};

interface ProjectsListProps {
  projects: ProjectInterface[];
  onChange: (project: ProjectInterface[]) => void;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects, onChange }) => {
  const handleProjectChange = useCallback(
    (index: number, updatedProject: ProjectInterface) => {
      onChange(overrideListAtIndex(projects, updatedProject, index));
    },
    [projects, onChange],
  );

  const addProject = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      onChange(insertItemAtIndex(projects, { ...emptyProject, id: getUniqueId() }, projects.length));
    },
    [projects, onChange],
  );

  const removeProject = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
      event.preventDefault();
      onChange(removeItemAtIndex(projects, index));
    },
    [projects, onChange],
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>Projects:</div>
      {projects.length === 0 ? (
        <p>No projects</p>
      ) : (
        projects.map((project, index) => (
          <ProjectEditor
            key={project.id || index}
            project={project}
            onProjectChange={(updatedProject) => handleProjectChange(index, updatedProject)}
            onRemoveProject={(e: React.MouseEvent<HTMLButtonElement>) => removeProject(e, index)}
          />
        ))
      )}
      <Button onClick={addProject} type='add'>
        Add a New Project
      </Button>
    </div>
  );
};

export default ProjectsList;
