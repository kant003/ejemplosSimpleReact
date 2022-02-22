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
import Ejercicio1EsPrimo from './components/Ejercicio1EsPrimo';
import Ejercicio2Squad from './components/Ejercicio2Squad';
import Ejercicio3Firebase from './components/Ejercicio3Firebase';
import Ejercicio4Formulario from './components/Ejercicio4Formulario';
import Ejercicio2Classroom from './components/Ejercicio2Classroom';
import Ejercicio7ListaPuntuaciones from './components/Ejercicio7ListaPuntuaciones';
import Ejercicio7CustomHookListaPuntuaciones from './components/Ejercicio7CustomHookListaPuntuaciones';
import Ejercicio8Formulario from './components/Ejercicio8Formulario';
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
        <Route path="isPrimo/:parametro" element={<Ejercicio1EsPrimo numero={5}/>}></Route>
        <Route path="squad" element={<Ejercicio2Squad/>}></Route>
        <Route path="frutas" element={<Ejercicio3Firebase/>}></Route>
        <Route path="formulario" element={<Ejercicio4Formulario/>}></Route>
        <Route path="ejercicio2" element={<Ejercicio2Classroom/>}></Route>
        <Route path="ejercicio7" element={<Ejercicio7ListaPuntuaciones/>}></Route>
        <Route path="ejercicio7v2" element={<Ejercicio7CustomHookListaPuntuaciones/>}></Route>
        <Route path="ejercicio8" element={<Ejercicio8Formulario/>}></Route>
        
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
