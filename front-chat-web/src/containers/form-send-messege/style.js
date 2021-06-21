import styled from 'styled-components';
import { prop } from 'styled-tools';

export const ContentForm = styled.div`
  background-color: ${prop('theme.color.gray')};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormContent = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InputForm = styled.input`
  width: 75%;
  margin: 3%;
  border: 1px;
  border-radius: 15px;
  padding: 2%;
  outline: none;
`;

export const ContentFormInput = styled.div`
  background: ${prop('theme.color.blueMain')};
`;
