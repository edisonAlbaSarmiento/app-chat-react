import styled from 'styled-components';
import { prop } from 'styled-tools';

export const ContentChat = styled.div`
  min-width: 50vh;
  min-height: 79vh;
  overflow: scroll;
  background-color: ${prop('theme.color.gray')};
  @media (max-width: 768px) {
    min-height: 77vh;
    min-width: 0;
  }
`;

export const ContentMessageMain = styled.div`
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const ContentMessage = styled.div`
  display: flex;
  align-content: center;
  justify-content: ${(props) => (props.styleUser ? 'flex-end' : 'flex-start')};
  text-transform: lowercase;
`;

export const ContentTitle = styled.div`
  text-align: ${(props) => (props.styleUser ? 'right' : 'left')};
  border-radius: ${(props) =>
    props.styleUser ? '25px 0 0 25px' : '0 25px 25px 0'};
  background: ${(props) =>
    props.styleUser ? prop('theme.color.blueMain') : prop('theme.color.white')};
  width: auto;
  padding: 3%;
`;
