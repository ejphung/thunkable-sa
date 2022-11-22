import React, { FC } from 'react';
import { Layout } from 'antd';
import _ from 'lodash';

import { StyledContent } from './styles';
import AddProjectButton from '../buttons/AddProjectButton';
import ProjectItem from './ProjectItem';
import useProjectDashboard from '../../hooks/useProjectDashboard';

const MyProjectsDashboard: FC = () => {
  const {
    projects,
    addNewProject,
    confirmNewProject,
    renameProject,
    removeProject,
  } = useProjectDashboard();

  return (
    <Layout>
      <StyledContent isEmpty={!projects.length}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: '130px',
          }}
        >
          <AddProjectButton addNewProject={addNewProject} />
        </div>
        {!!projects.length && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              margin: '30px 105px',
            }}
          >
            {projects.map((project) => {
              return (
                <ProjectItem
                  key={`${project.id}_${new Date()}`}
                  id={project.id}
                  name={project.name}
                  created_at={project.created_at}
                  confirmNewProject={confirmNewProject}
                  removeProject={removeProject}
                />
              )
            })}
          </div>
        )}
      </StyledContent>
    </Layout>
  )
};

export default MyProjectsDashboard;