import styled from 'styled-components';
import { prop } from 'styled-tools';

export const ContentForm = styled.div`
  background-color: ${prop('theme.color.gray')};
  width: 50%;
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
  width: 90%;
  margin: 3% 0 0 3%;
  border: 1px;
  border-radius: 15px;
  padding: 2%;
  outline: none;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 7%;
`;

export const ButtonForm = styled.button`
  padding: 6.4px 20px;
  font-size: 16px;
  border-radius: 40px;
  background-color: ${prop('theme.color.blueMain')};
  color: white;
  border: 2px;
`;

export const ContentTitle = styled.div`
  text-align: left;
  border-radius: 0 25px 25px 0;
  background: ${prop('theme.color.blueMain')};
  width: 35%;
  padding: 3%;
  margin-bottom: 4%;
`;
