import React, { Fragment, useState } from 'react'

const Eventos = () => {

    const [texto, setTexto ] = useState('Valor por defecto');

    const eventoCLick = () => {
        console.log('Me diste un click');
        setTexto('Cambiando el texto');
    }

    return (
        <Fragment>
            <hr/>
            <h2>{texto}</h2>
            <button onClick={() => eventoCLick()}>Aceptar</button>
        </Fragment>
    )
}

export default Eventos
