import React, {useState} from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase'

const Contenedor = styled.div
`
display: flex;
align-items: center;
padding-top: center;
flex-direction: column;
`;

const Boton = styled.button`
background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e %100);
background-size: 300px;
font-family: Arial, Helvetica, sans-serif;
color: #ffffff;
margin-top: 3rem;
padding: 1rem 3rem;
font-size: 2rem;
border: 2px solid black;
`;

function App() {
  //State
  const [frase, obtenerFrase] = useState({});

  //Async para esperar la respuesta y reemplazar (.then)
  const consultarAPI = async () =>
  {
    //Esperará a la respuesta con (await)
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json();
    obtenerFrase(frase[0])
  }
  
  return (
    <Contenedor>
      <Frase
      frase={frase}
       />
      <Boton
      onClick={consultarAPI}>
      Obtener Frase 
    </Boton>
    </Contenedor>
  );
}

export default App;
