import React, { FC } from 'react';

import {
  StyledDeleteProjectModal,
  StyledDeleteProjectModalContentText,
  StyledDeleteProjectModalContentTextWrapper,
  StyledDeleteProjectModalContentWrapper,
} from './styles';

import images from '../../config/images';

const QuestionIcon: FC = () => (
  <img
    src={images.icons.question}
    alt='question-icon'
    style={{
      width: '22px',
      height: '22px',
      marginRight: '16px',
      marginTop: '8px'
    }}
  />
)

interface DeleteProjectModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
  handleConfirm: () => void;
}

const DeleteProjectModal: FC<DeleteProjectModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  handleConfirm,
}) => {

  return (
    <StyledDeleteProjectModal
      open={isModalOpen}
      destroyOnClose
      maskClosable
      closable={false}
      onOk={() => handleConfirm()}
      onCancel={() => setIsModalOpen(false)}
      maskStyle={{
        backgroundColor: 'transparent',
      }}
    >
      <StyledDeleteProjectModalContentWrapper>
        <QuestionIcon />
        <StyledDeleteProjectModalContentTextWrapper>
          <StyledDeleteProjectModalContentText>
            Are you sure you want to delete this project?
          </StyledDeleteProjectModalContentText>
          <StyledDeleteProjectModalContentText style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
            This action can't be undone.
          </StyledDeleteProjectModalContentText>
        </StyledDeleteProjectModalContentTextWrapper>
      </StyledDeleteProjectModalContentWrapper>
    </StyledDeleteProjectModal>
  )
};

export default DeleteProjectModal;