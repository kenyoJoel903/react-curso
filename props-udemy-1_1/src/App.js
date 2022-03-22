import Saludos from './componentes/Saludos';
import Comentario from './componentes/Comentario';

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludos persona="Kenyo" edad={20}/>
      <Saludos persona="Joel" edad={30}/>
      <Saludos persona="Juan" edad={25}/>

      <hr/>
      <h3>Cajita de comentarios</h3>
      <Comentario 
        url='https://picsum.photos/64'
        persona='Kenyo'
        comentario='aasdadadad adsada'/>
      <Comentario 
        url='https://picsum.photos/64'
        persona='Joel'
        comentario='aasdadadad adsada'/>
        <Comentario 
        url='https://picsum.photos/64'
        persona='Juan'
        comentario='aasdadadad adsada'/>
    </div>
  );
}

export default App;
