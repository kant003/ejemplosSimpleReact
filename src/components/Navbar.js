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
    </div>
}

export default NavBar;