import React from 'react';

function Saludos(props) {
  return (
      <div>
          <h2>Hola {props.persona}</h2>
          <h4>Edad {props.edad}</h4>
      </div>
  );
}

export default Saludos;
