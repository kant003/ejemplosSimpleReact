import { useState } from "react";

function BuscarPokemon() {
    const [nombre, setNombre] = useState("");
    const [peso, setPeso] = useState(0);
    const [foto, setFoto] = useState("");
    const [find, setFind] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
            const request = await fetch(url)
            const datos = await request.json()
            setPeso(datos.weight)
            setFoto(datos.sprites.front_default)
            setFind(true)
        }catch(e){
            setFind(false)
        }

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name==='nombre') setNombre(value)
    }
    return <>
        <h2>Buscador de pokemons</h2>
        <form onSubmit={handleSubmit}>
            <label>Nombre:
                <input type="text" name="nombre" value={nombre} onChange={handleChange}/>
            </label> 
            <input type="submit" value="Buscar"/>
        </form>
        <br/>
        {find && <span>Peso: {peso}</span> }
        <br/>
        {find && <img src={foto} alt="Foto del pokemon"/> }
        {!find && <span>No se encontro el pokemon</span> }
    </>;
}

export default BuscarPokemon;