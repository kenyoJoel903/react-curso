import React from 'react';
import { Link } from "react-router-dom";

const Nosotros = () => {

  const datos = [
    {id: 1, nombre : 'ReactJs'},
    {id: 2, nombre : 'VueJs'},
    {id: 3, nombre : 'AngularJs'}
  ];

  const [equipo, setEquipo] = React.useState([]);

  React.useEffect(() => {
    console.log('use effect');
    obtenerDatos();
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await data.json();
    setEquipo(usuarios);
  }

  return <div>
       <h1>Nosotros</h1>
       <ul>
         {
           equipo.map(item => (
             <li key={item.id}>
               <Link to={`/nosotros/${item.id}`}>
                  {item.name} - {item.email}
               </Link>
            </li>
           ))
         }
       </ul>
  </div>;
};

export default Nosotros;
