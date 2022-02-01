import { useState } from "react";
import { saveForm } from "../services/formularioDB";

function Ejercicio4Formulario() {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(18);

    let handleSubmit = async (e) => {
        // tratar con los datos del formulario
        console.log(nombre, edad);
        await saveForm({nombre,edad})
        e.preventDefault();
    }
    let handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "nombre") {
            setNombre(value);
        } else {
            setEdad(value);
        }
    }
    return <form onSubmit={handleSubmit}>
        <label>Nombre:
            <input name="nombre" value={nombre} onChange={handleChange}/>
        </label>
        <label>Edad:
            <input name="edad" value={edad} onChange={handleChange}/>
        </label>
        <input type="submit" value="Enviar" />
    </form>
}

export default Ejercicio4Formulario;