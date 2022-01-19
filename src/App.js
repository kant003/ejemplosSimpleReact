import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar';
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
import ListaPokemons from './components/ListaPokemons';
import ListaTecnologiasFirebase from './components/ListaTecnologiasFirebase';
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Saludador nombre="Angel" apellido="Gonzalez" />} />
        <Route path="listaPokemons"
          element={<ListaPokemons cantidad={5}></ListaPokemons>} ></Route>
        <Route path="random" element={<Ejercicio2Random></Ejercicio2Random>}> </Route>
        <Route path="temp/:grados"
          element={<Ejercicio1Temperatura grados={33}></Ejercicio1Temperatura>}></Route>
        <Route path="listaTecnologias" element={<ListaTecnologiasFirebase/>}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>

      

    <ComponenteEventos></ComponenteEventos>
    <ComponenteMapeado></ComponenteMapeado>
    <ComponenteCondicional></ComponenteCondicional>
    <ComponenteProps
      mensaje="hola"
      valor={10}
      activo={true}
      profesores={['angel', 'bea', 'pepe', 'isabel']}
      miFuncion={num => num * num}
      miJsx={<p>Soy un JSX</p>}
      otroComponente={<Saludador nombre="Juan" apellido="Perez" />}
    ></ComponenteProps>
    <ComponenteConClases></ComponenteConClases>
    <ComponenteConFunciones />
    <ComponenteConFuncionesFlecha></ComponenteConFuncionesFlecha>
    </div>
  );
}

export default App;
