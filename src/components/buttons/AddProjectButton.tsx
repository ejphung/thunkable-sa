import React, { FC, useState } from 'react';
import { Button } from 'antd';

import images from '../../config/images';

const AddIcon: FC = () => (
  <img
    src={images.icons.plusSign}
    alt='add-project-icon'
  />
)

const AddProjectButton: FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <Button
      shape='circle'
      icon={<AddIcon />}
      className='add-project-button-class'
      style={{
        height: '60px',
        width: '60px',
        backgroundColor: isHover ? '#3D3A4F' : '#4A475F',
        border: 'none',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
        marginTop: '-30px',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}

export default AddProjectButton;
