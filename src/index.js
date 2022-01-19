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
import ComponenteMapeado from './components/ComponenteMapeado';
import ComponenteEventos from './components/ComponenteEventos';
import Ejercicio1Temperatura from './components/Ejercicio1Temperatura';
import Ejercicio2Random from './components/Ejercicio2Random';
import ComponenteTemporizador from './components/ComponenteTemporizador';
import ListaPokemons from './components/ListaPokemons';
// npm i react-router-dom
import {BrowserRouter} from 'react-router-dom'
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
