import React, { useEffect, useRef } from 'react';
import {
  ContentChat,
  ContentTitle,
  ContentMessage,
  ContentMessageMain,
} from './style';
import { TitleComponet } from '../../atoms';
import { useTheme } from 'styled-components';

function CardMenssage({ message, nameUser }) {
  const theme = useTheme();

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  return (
    <ContentChat>
      {message.map((itemMessage, i) => (
        <ContentMessageMain key={i}>
          <ContentMessage
            styleUser={itemMessage.nameUser === nameUser ? true : false}
          >
            <TitleComponet
              variant="title"
              fontSize="12px"
              marginText="1%"
              color={theme.color.black}
            >
              {itemMessage.nameUser}
            </TitleComponet>
          </ContentMessage>
          <ContentMessage
            styleUser={itemMessage.nameUser === nameUser ? true : false}
          >
            <ContentTitle
              styleUser={itemMessage.nameUser === nameUser ? true : false}
            >
              <TitleComponet
                fontSize="14px"
                color={
                  itemMessage.nameUser === nameUser
                    ? theme.color.white
                    : theme.color.black
                }
              >
                {itemMessage.message}
              </TitleComponet>
            </ContentTitle>
          </ContentMessage>
        </ContentMessageMain>
      ))}
      <div ref={divRef}></div>
    </ContentChat>
  );
}

export default CardMenssage;
