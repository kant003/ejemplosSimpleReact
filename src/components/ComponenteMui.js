import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { useState } from "react";

function ComponenteMui() {
    const [background, setBackground] = useState('#fff')
    const [valor, setValor] = useState(0);

    const showMsg = () => {  alert('hola')  }
    const handleChange = (e) => {
        setValor(e.target.value);
        setBackground(`hsl(${e.target.value}, 100%, 50%)`)
    }
    const style={ backgroundColor: background  }
    return <div style={style}>
        <h1>Componente ejemplo Mui</h1>
        {valor}
        <br/>
        <Button onClick={showMsg} variant="contained">Boton Mui</Button>
        <button onClick={showMsg}>Boton normal</button>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"
            min={0} max={255} step={2} onChange={handleChange}/>
    </div>;
}

export default ComponenteMui;