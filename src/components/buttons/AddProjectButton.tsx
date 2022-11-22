import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { Button } from 'antd';

import images from '../../config/images';

interface AddProjectButtonStyleProps {
  readonly isHovered: boolean;
}

const StyledButton = styled(Button, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'isHovered'
})<AddProjectButtonStyleProps>`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  background-color: ${(props) => props.isHovered ? '#3D3A4F' : '#4A475F'};
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  margin-top: -30px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const AddIcon: FC = () => (
  <img
    src={images.icons.plusSign}
    alt='add-project-icon'
  />
)

interface AddProjectButtonProps {
  addNewProject: () => void;
}

const AddProjectButton: FC<AddProjectButtonProps> = ({ addNewProject }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <StyledButton
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => addNewProject()}
      isHovered={isHovered}
    >
      <AddIcon />
    </StyledButton>
  )
}

export default AddProjectButton;
