import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [nombre, setNombre] = useState("");

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={nombre} onChange={handleChange} placeholder="Introduzca su nombre:" />
        {nombre && <p>Hola, {nombre}</p>}
      </header>
    </div>
  );
}

export default App;
