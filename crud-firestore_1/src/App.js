import { async } from '@firebase/util';
import React from 'react';
import {_getDocs, _addDoc, _deleteDoc, _updateDoc} from './firebase';



function App() {

  const [tareas, setTareas] = React.useState([]);
  const [tarea, setTarea] = React.useState(''); 
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [id, setId] = React.useState(null);

  const obtenerDatos = async () => {
    try {
      const data = await _getDocs('tareas');
      setTareas(data);
    } catch (error) {
      console.log(error);
    }
  }

  const agregar = async (e) => {
    e.preventDefault();
    if(!tarea.trim()) {
      return;
    }
    const _tarea = {
      name: tarea,
      fecha: new Date().toISOString()
    };
    try {
      const data = await _addDoc(_tarea, 'tareas');
      setTarea('');
      setTareas([
        ...tareas,
        {..._tarea, id: data.id}
      ])
    } catch (error) {
      console.log(error);
    }
  }

  const eliminar = async(id) => {
    try {
      const data = await _deleteDoc(id, 'tareas');
      const arrayFiltrado = tareas.filter(item => item.id !== id);
      setTareas(arrayFiltrado);
    } catch (error) {
      console.log(error);
    }
  }

  const activarEdicion = (item) => {
    setModoEdicion(true);
    setTarea(item.name);
    setId(item.id);
  }

  const guardarEditar = async (e) => {
    e.preventDefault();
    if(!tarea.trim()) {
      return;
    }
    const newData = {
      name: tarea
    }
    try {
      const data = await _updateDoc(id, newData, 'tareas');
      const arrayEditado = tareas.map(item => (
        item.id === id ? {id: item.id, fecha: item.fecha, name:tarea} : item
      ))
      setTareas(arrayEditado);
      setTarea('');
      setId(null);
      setModoEdicion(false);
    } catch (error) {
      console.log(error);
    }
  }



  React.useEffect(() => {
    obtenerDatos();
  }, [])
  
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='list-group'>
            {
              tareas.map(item => (
                <li className='list-group-item' key={item.id}>
                  {item.name}
                  <button className='btn btn-danger btn-sm float-end' onClick={() => eliminar(item.id)}>Eliminar</button>
                  <button className='btn btn-warning btn-sm float-end me-2' onClick={() => activarEdicion(item)}>Editar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='col-md-6'>
            <h3>
              {
                modoEdicion ? 'Edición tarea' : 'Agregar tarea'
              }
            </h3>
            <form onSubmit={ modoEdicion ? guardarEditar : agregar}>
              <input type="text" placeholder='Ingrese tarea' className='form-control mb-2'
              onChange={e => setTarea(e.target.value)}
              value={tarea}/>
              <button className={
                modoEdicion ? 'btn btn-warning btn-block': 'btn btn-dark btn-block'
              } type='submit'>
              {
                modoEdicion ? 'Editar' : 'Agregar'
              }
              </button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default App;
