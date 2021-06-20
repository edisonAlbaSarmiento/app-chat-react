import React, { useState } from 'react';

import { FormSendNameUser } from '../../containers';
import { ChatComponent } from '../../componentes/organisms';
import { HomeTemplate } from '../../componentes/templates';
import '../../App.css';

function Home() {
  const [nombre, setNombre] = useState('');
  const [registrado, setRegistrado] = useState(false);

  const register = (e) => {
    e.preventDefault();
    if (nombre !== '') {
      setRegistrado(true);
    }
  };
  return (
    <div>
      <header className="App-header"></header>
      <HomeTemplate>
        {!registrado && (
          <FormSendNameUser
            register={register}
            setNombre={setNombre}
            nombre={nombre}
          />
        )}

        {registrado && <ChatComponent nombre={nombre} />}
      </HomeTemplate>
    </div>
  );
}

export default Home;
