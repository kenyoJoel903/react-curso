import React from 'react';
import Imagen from './Imagen';
const Comentario = ({url, persona, comentario}) => {
  return <div className='media'>
      <Imagen url={url} />
      <div className="media-body">
          <h5 className="mt-0">{persona}</h5>
          {comentario}
      </div>
  </div>;
};

export default Comentario;
