import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    const {id} = useParams();

    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        console.log('use effect');
        obtenerDatos();
      }, [])
    
      const obtenerDatos = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const usuario = await data.json();
        setUser(usuario);
      }

  return <div>
      {
          user ? <h1>{user.name}</h1> : ''
      }
      {
          user ? <h1>{user.phone}</h1> : ''
      }
  </div>;
};

export default User;
