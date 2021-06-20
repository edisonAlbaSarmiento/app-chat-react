import React from 'react';

function FormSendNameUser({ register, setNombre, nombre }) {
  return (
    <div>
      <form onSubmit={register}>
        <label htmlFor="">Introduzca su nombre</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <button>Ir al chat</button>
      </form>
    </div>
  );
}

export default FormSendNameUser;
