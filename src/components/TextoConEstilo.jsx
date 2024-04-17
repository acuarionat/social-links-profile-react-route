import React from 'react';
import './TextoConEstilo.css'; 

function TextoConEstilo({ texto }) {
  const determinarClase = (texto) => {
    if (texto === 'Dead') {
      return 'rojo';
    } else if (texto === 'Alive') {
      return 'verde';
    }
    return 'amarillo'; 
  };

  return (
    <span className={determinarClase(texto)}>
      {texto}
    </span>
  );
}

export default TextoConEstilo;
