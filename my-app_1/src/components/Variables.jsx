import React from 'react'

const Variables = () => {
    const saludo = "HOla desde constantes";
    const imagen = "https://i.blogs.es/3a5892/dragon-ball-cabecera/1366_2000.jpg";
    return (
        <div>
            <h2>Nuevo componente {saludo}</h2>
            <img src={imagen} width="200px" height="100px"/>
        </div>
    )
}

export default Variables
