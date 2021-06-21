import React, { useState } from 'react';

import { FormSendNameUser } from '../../containers';
import { ChatComponent } from '../../componentes/organisms';
import { HomeTemplate } from '../../componentes/templates';
import '../../App.css';

function Home() {
  const [nombre, setNombre] = useState('');
  const [register, setRegister] = useState(false);

  const setRegisterName = (e) => {
    e.preventDefault();
    if (nombre !== '') {
      setRegister(true);
    }
  };
  return (
    <div>
      <header className="App-header"></header>
      <HomeTemplate register={register}>
        {!register && (
          <FormSendNameUser
            register={setRegisterName}
            setNombre={setNombre}
            nombre={nombre}
          />
        )}

        {register && <ChatComponent nombre={nombre} />}
      </HomeTemplate>
    </div>
  );
}

export default Home;
