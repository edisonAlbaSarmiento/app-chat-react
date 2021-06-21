import React from 'react';
import {
  ContentForm,
  FormContent,
  InputForm,
  ButtonForm,
  ContentButton,
  ContentTitle,
} from './style';
import { TitleComponet } from '../../componentes/atoms';
import { useTheme } from 'styled-components';

function FormSendNameUser({ register, setName, name }) {
  const theme = useTheme();

  return (
    <ContentForm>
      <FormContent onSubmit={register}>
        <ContentTitle>
          <TitleComponet fontSize="18px" color={theme.color.white}>
            Nombre:
          </TitleComponet>
        </ContentTitle>
        <InputForm value={name} onChange={(e) => setName(e.target.value)} />
        <ContentButton>
          <ButtonForm>Guardar</ButtonForm>
        </ContentButton>
      </FormContent>
    </ContentForm>
  );
}

export default FormSendNameUser;
