import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ComponenteConClases from './components/ComponenteConClases';
import ComponenteConFunciones from './components/ComponenteConFunciones';
import ComponenteConFuncionesFlecha from './components/ComponenteConFuncionesFlecha';
import Saludador from './components/Saludador';
import ComponenteProps from './components/ComponenteProps';
import ComponenteCondicional from './components/ComponenteCondicional';
ReactDOM.render(
  <React.StrictMode>
    <ComponenteCondicional></ComponenteCondicional>
    <ComponenteProps 
      mensaje="hola"
      valor={10}
      activo={true}
      profesores={['angel', 'bea', 'pepe', 'isabel']}
      miFuncion={ num => num * num } 
      miJsx={<p>Soy un JSX</p>}
      otroComponente={<Saludador nombre="Juan" apellido="Perez" />}
    ></ComponenteProps>
    <Saludador nombre="Angel" apellido="Gonzalez"></Saludador>
    <ComponenteConClases></ComponenteConClases>
    <ComponenteConFunciones/>
    <ComponenteConFuncionesFlecha></ComponenteConFuncionesFlecha>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
