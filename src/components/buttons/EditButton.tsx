import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';

import images from '../../config/images';

const StyledButton = styled(Button)`
  drop-shadow: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditIcon: FC = () => (
  <img
    src={images.icons.edit}
    alt='edit-project-name'
  />
)

const EditIconHovered: FC = () => (
  <img
    src={images.icons.editHover}
    alt='edit-project-name'
  />
)

interface EditButtonProps {
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const EditButton: FC<EditButtonProps> = ({ handleClick }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (isHovered) {
    return (
      <StyledButton
        icon={<EditIconHovered />}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => handleClick(e)}
      />
    )
  }

  return (
    <StyledButton
      icon={<EditIcon />}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => handleClick(e)}
    />
  )
}

export default EditButton;
