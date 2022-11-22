import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid'
import { Card, Layout, Input, Modal } from 'antd';

const { Content } = Layout;

interface ContentProps {
  readonly isEmpty: boolean;
}

export const StyledContent = styled(Content, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'isEmpty'
})<ContentProps>`
  height: 100vh;
  background-color: ${(props) => props.isEmpty ? '#fff' : '#F7F9FD'};
`

export const StyledCard = styled(Card)`
  width: 100%;
  padding: 20px 24px;
  background-color: #FDFDFD;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0;
  font-family: Source Sans Pro, helvetica;
  & .ant-card-body {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const StyledInput = styled(Input)`
  max-width: 200px;
  border-radius: 2px;
`;

interface StyledProjectItemContentDivProps {
  isSavedProject: boolean;
}

export const StyledProjectItemContentDiv = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'isSavedProject'
})<StyledProjectItemContentDivProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${prop => prop.isSavedProject ? '100%' : 'auto'};
`;

export const StyledSavedProjectNameDiv = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const StyledSavedProjectNameText = styled('p')`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 24px 0 0;
  width: 200px;
  text-align: start;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const StyledProjectTimestampText = styled('p')`
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
`;

export const StyledDeleteProjectModal = styled(Modal)`
  & .ant-modal-content {
    background: #EEEFF3;
    padding: 32px;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledDeleteProjectModalContentWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledDeleteProjectModalContentTextWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 45px;
`;

export const StyledDeleteProjectModalContentText = styled('p')`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.85);
  margin: 0;
`;
