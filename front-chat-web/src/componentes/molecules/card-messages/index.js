import React, { useEffect, useRef } from 'react';

function CardMenssage({ mensajes }) {
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  return (
    <div>
      <div className="chat">
        {mensajes.map((e, i) => (
          <div key={i}>
            <div>{e.nombre}</div>
            <div>{e.mensaje}</div>
          </div>
        ))}
        <div ref={divRef}></div>
      </div>
    </div>
  );
}

export default CardMenssage;
