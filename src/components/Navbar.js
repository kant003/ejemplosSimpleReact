import {Link} from 'react-router-dom'

function NavBar() {
    return <div>
        <Link to="/">Home</Link> |
        <Link to="/listaPokemons">Listar los pokemons</Link> |
        <Link to="/random">Numero random</Link> |
        <Link to="/temp/88">Numero random</Link> |
        <Link to="/isPrimo/44">Ejercicio 1</Link> |
        <Link to="/squad">Ejercicio 2</Link> |
        <Link to="/frutas">Ejercicio 3</Link> |
        <Link to="/formulario">Ejercicio 4</Link> |
        <Link to="/ejercicio2">Ejercicio 2 classroom</Link> |
        <Link to="/ejercicio7">Ejercicio 7 Lista puntuaciones classroom</Link> |
        <Link to="/ejercicio7V2">Ejercicio 7 Custom hook Lista puntuaciones classroom</Link> |
        <Link to="/ejercicio8">Ejercicio 8 formulario</Link> |
        <Link to="/ejercicio10">Ejercicio 10 filtrar</Link> |
        <Link to="/mui">React Material</Link> |
    </div>
}

export default NavBar;