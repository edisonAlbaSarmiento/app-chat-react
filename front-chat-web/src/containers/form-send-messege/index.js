import React from 'react';

function FormSendMessage({ submit, setMensaje, mensaje }) {
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="">Escriba su mensaje</label>
        <input
          name=""
          id=""
          cols="30"
          rows="10"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></input>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default FormSendMessage;
