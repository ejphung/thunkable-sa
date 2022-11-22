import { useState } from 'react';
import _ from 'lodash';

export interface Project {
  id: string;
  name?: string;
  created_at?: string;
}

const useProjectDashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  function addNewProject() {
    setProjects(prevProjects => ([
      ...prevProjects,
      { id: _.uniqueId() }
    ]))
    console.log({projects})
  }

  function confirmNewProject(id: string, name: string) {
    const newProjectList = projects.map((project) => {
      if (project.id === id) {
        return {
          ...project,
          name,
          created_at: new Date().toISOString(),
        }
      }
      return project;
    })
    setProjects(newProjectList);
  }

  function renameProject(id: string, name: string) {
    const newProjectList = projects.map((project) => {
      if (project.id === id) {
        return {
          ...project,
          name,
        }
      }
      return project;
    })
    setProjects(newProjectList);
  }

  function removeProject(id: string) {
    const newProjectList = projects.filter((project) => project.id !== id);
    setProjects(newProjectList);
  }

  return {
    projects,
    setProjects,
    addNewProject,
    confirmNewProject,
    renameProject,
    removeProject,
  }
};

export default useProjectDashboard;