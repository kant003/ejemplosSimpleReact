import { useState } from "react";

function Ejercicio8Formulario() {
    const [puntuacion, setPuntuacion] = useState(0);

    let handleSubmit = async (e) => {
        e.preventDefault();
        //let token = leerElTokenDelLocalStorage();
        const rawResponse = await fetch('http://localhost:5300/puntuacion/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'auth-token':token
            },
            body: JSON.stringify({ puntuacion:puntuacion, date: new Date() })
        });
        const content = await rawResponse.json();
        console.log(content);
    }

    let handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "puntuacion") setPuntuacion(value);
    }

    return <form onSubmit={handleSubmit}>
        <label>Puntuacion:
            <input name="puntuacion" value={puntuacion} onChange={handleChange} />
        </label>
        <input type="submit" value="Enviar" />
    </form>
}

export default Ejercicio8Formulario;