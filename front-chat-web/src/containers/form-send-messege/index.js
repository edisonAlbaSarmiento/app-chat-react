import React from 'react';
import { ContentForm, FormContent, InputForm, ContentFormInput } from './style';
import { SendOutlined } from '@ant-design/icons';

import { useTheme } from 'styled-components';

function FormSendMessage({ submit, setMessageClean, messageClean }) {
  const theme = useTheme();

  return (
    <ContentForm>
      <FormContent onSubmit={submit}>
        <ContentFormInput>
          <InputForm
            placeholder="Escribe un mensaje"
            value={messageClean}
            onChange={(e) => setMessageClean(e.target.value)}
          />
          <SendOutlined style={{ color: theme.color.black }} />
        </ContentFormInput>
      </FormContent>
    </ContentForm>
  );
}

export default FormSendMessage;
