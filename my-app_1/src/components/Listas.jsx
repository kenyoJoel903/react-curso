import React from 'react'

const Listas = () => {

    const estadoInicial = [
        {id:1, texto: 'Tarea 1'},
        {id:2, texto: 'Tarea 2'},
        {id:3, texto: 'Tarea 3'},
        {id:4, texto: 'Tarea 4'}
    ];
    const [lista, setLista] = React.useState(estadoInicial);

    const agregarElemento = () => {
        console.log('click');
        const lastItem = lista[lista.length -1];
        setLista([
            ...lista,
            {id: lastItem.id + 1, texto: `Tarea ${lastItem.id + 1}`}
        ])
    };

    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map((item, index) => (
                    <h2 key={item.id}>{item.texto}</h2>
                ))
            }
            <button onClick={() => agregarElemento()}>Agregar elemento</button>
        </div>
    )
}

export default Listas
