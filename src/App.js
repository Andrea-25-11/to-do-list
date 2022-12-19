/*En este App.js Se llama a la etiqueta Container la cual contiene en su interior los demás componentes. 
Para ello se creo una función que retornaba en su interior un div conteniendo dicha etiqueta*/
// Se realizan las importaciones de la librería de React, de los estilos y del componente container
import React from 'react';
import './App.scss';
import Container from './components/Container';

// Se crea una función que retorna un div el cual contendra el primer componente llamado Container
function App() {
  return (
    <div className="App">
      <Container/>
    </div>
  );
};
// Se exporta el app.js para que sea leido en el index.js
export default App;
