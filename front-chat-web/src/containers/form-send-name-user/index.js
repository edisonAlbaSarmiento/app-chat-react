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

function FormSendNameUser({ register, setNombre, nombre }) {
  const theme = useTheme();

  return (
    <ContentForm>
      <FormContent onSubmit={register}>
        <ContentTitle>
          <TitleComponet fontSize="18px" color={theme.color.white}>
            Nombre:
          </TitleComponet>
        </ContentTitle>
        <InputForm value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <ContentButton>
          <ButtonForm>Guardar</ButtonForm>
        </ContentButton>
      </FormContent>
    </ContentForm>
  );
}

export default FormSendNameUser;
