import React, { useState } from 'react';

import { FormSendNameUser } from '../../containers';
import { ChatComponent } from '../../componentes/organisms';
import { HomeTemplate } from '../../componentes/templates';
import '../../App.css';

function Home() {
  const [name, setName] = useState('');
  const [register, setRegister] = useState(false);

  const setRegisterName = (e) => {
    e.preventDefault();
    if (name !== '') {
      setRegister(true);
    }
  };
  return (
    <div>
      <HomeTemplate register={register}>
        {!register && (
          <FormSendNameUser
            register={setRegisterName}
            setName={setName}
            name={name}
          />
        )}

        {register && <ChatComponent nameUser={name} />}
      </HomeTemplate>
    </div>
  );
}

export default Home;
