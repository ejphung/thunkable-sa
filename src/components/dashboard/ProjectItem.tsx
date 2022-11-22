import React, { FC, useEffect, useState } from 'react';
import moment from 'moment';

import {
  StyledCard,
  StyledInput,
  StyledProjectItemContentDiv,
  StyledProjectTimestampText,
  StyledSavedProjectNameDiv,
  StyledSavedProjectNameText,
} from './styles';

import images from '../../config/images';
import EditButton from '../buttons/EditButton';
import DeleteButton from '../buttons/DeleteButton';
import DeleteProjectModal from './DeleteProjectModal';

const ProjectItemIcon: FC = () => (
  <img
    src={images.icons.thunkableProjectIcon}
    alt='project-item-icon'
    style={{
      width: '32px',
      height: '32px',
      marginRight: '24px'
    }}
  />
)

interface ProjectItemProps {
  id: string;
  name?: string;
  created_at?: string;
  confirmNewProject: (id: string, name: string) => void;
  removeProject: (id: string) => void;
}

const ProjectItem: FC<ProjectItemProps> = ({
  id,
  name,
  created_at,
  confirmNewProject,
  removeProject,
}) => {
  const [currentProjectName, setCurrentProjectName] = useState<string>(name || '');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const IS_SAVED_PROJECT = Boolean(name?.length && created_at?.length);

  useEffect(() => {
    if (!name) setCurrentProjectName('');
    else setCurrentProjectName(name);
  }, [name])

  function handleInput(e: React.FocusEvent<HTMLInputElement, Element> | React.KeyboardEvent<HTMLInputElement>) {
    if (!e.currentTarget?.value.length) {
      removeProject(id)
    } else {
      confirmNewProject(id, e.currentTarget.value)
    }
  }

  function handleEdit(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    setIsEditing(!isEditing);
  }

  function handleModalConfirm() {
    removeProject(id);
  }

  function formatDate(date: string | undefined) {
    if (!date) return;
    return moment(date).format('MMM DD, YYYY  hh:mma');
  }

  return (
    <StyledCard bordered={false}>
      <ProjectItemIcon />
      <StyledProjectItemContentDiv isSavedProject={IS_SAVED_PROJECT}>
        {IS_SAVED_PROJECT && !isEditing ? (
          <StyledSavedProjectNameDiv>
            <StyledSavedProjectNameText>
              {name}
            </StyledSavedProjectNameText>
            <EditButton handleClick={handleEdit} />
          </StyledSavedProjectNameDiv>
        ) : (
          <StyledInput
            placeholder={'Name your project'}
            autoFocus
            onChange={(e) => setCurrentProjectName(e.target.value)}
            onBlur={handleInput}
            onPressEnter={handleInput}
          />
        )}
        {IS_SAVED_PROJECT ? (
          <>
            <StyledProjectTimestampText>
              {formatDate(created_at)}
            </StyledProjectTimestampText>
            <DeleteButton handleClick={(e) => setIsModalOpen(true)} />
            <DeleteProjectModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              handleConfirm={handleModalConfirm}
            />
          </>
        ) : (
          null
        )}
      </StyledProjectItemContentDiv>
    </StyledCard>
  )
};

export default ProjectItem;