import {useState} from 'react';
import './App.sass';

function App() {  
  const notas = [
    {
      nombre: 'Do',
      link: require('./notes/do.wav'),
      sostenido: true
    },
    {
      nombre: 'Re',
      link: require('./notes/re.wav'),
      sostenido: true
    },
    {
      nombre: 'Mi',
      link: require('./notes/mi.wav')
    },
    {
      nombre: 'Fa',
      link: require('./notes/fa.wav'),
      sostenido: true
    },
    {
      nombre: 'Sol',
      link: require('./notes/sol.wav'),
      sostenido: true
    },
    {
      nombre: 'La',
      link: require('./notes/la.wav'),
      sostenido: true
    },
    {
      nombre: 'Si',
      link: require('./notes/si.wav')
    },
  ]

  //Hook useState:
  //1.- Variable inicial
  //2.- Funcion que se dedique a actualizar la variable
  //3.- El valor inicial de esa variable
  const [click, setClick] = useState(0)
  const [sonando, setSonando] = useState('')

  const handleClick = nota => {
    setSonando(nota.nombre)
    const sonido = new Audio(nota.link.default)
    sonido.play()
  }

  const handlerClickCount = () => {
    setClick(click + 1)
  }

  setTimeout(()=>{
    setSonando('') //actualiza a sonando
  },300)

  return (
    <div>
      <div className="titulo">
        <h1>Piano con React.js 🎹</h1>
        <h2>Hecho por Male 😀</h2>
        <h3 className="esta-sonando">{sonando}</h3>
        {/* ese && significa si sonando tiene algo que no sea un string vacio mostrar eso */}
        <button onClick={handlerClickCount}>Has dado{click} clicks</button>
      </div>
      <div className="container">
        {notas.map(nota => ( //retorno implicito,sin poner return
          <div 
            className="nota"
            key={Math.random() * 1000}
            className={`nota ${sonando === nota.nombre && 'sonando'}`}
            onClick={() => handleClick(nota)}//le agrega ffuncion anonima para esperar hasta que se haga el click para que se ejecute, sino se ejecutaba todo de una
          >
            
            {nota.sostenido && <div className="negra"></div>}
            {/* cuando la nota tenga la propiedad de sostenido, la va a pintar con la clase de negra */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;