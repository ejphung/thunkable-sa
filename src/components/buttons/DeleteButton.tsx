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

const DeleteIcon: FC = () => (
  <img
    src={images.icons.delete}
    alt='delete-icon'
  />
)

const DeleteIconHovered: FC = () => (
  <img
    src={images.icons.deleteHover}
    alt='delete-icon'
  />
)

interface DeleteButtonProps {
  handleClick?: (val: React.MouseEvent<HTMLElement, MouseEvent> | boolean) => void;
}

const DeleteButton: FC<DeleteButtonProps> = ({ handleClick }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (isHovered) {
    return (
      <StyledButton
        icon={<DeleteIconHovered />}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          if (!handleClick) return;
          handleClick(e);
        }}
      />
    )
  }

  return (
    <StyledButton
      icon={<DeleteIcon />}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        if (!handleClick) return;
        handleClick(e);
      }}
    />
  )
}

export default DeleteButton;
