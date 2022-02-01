import { useParams } from "react-router";

function Ejercicio1EsPrimo(props) {
    
    const {parametro} = useParams();

    let isPrimo = (numero) =>{
        let numeroPrimo = true
        for (let i = 1; i < numero; i++) {
            if (numero / i === Math.round(numero / i) &&
                i !== 1 && i !== numero) {
                numeroPrimo = false
                break
            }
        }
        return numeroPrimo
    }

    return <h1> El numero {parametro}  
       {isPrimo(parametro) ? ' es primo' : ' no es primo'}
    </h1>
    
}

export default Ejercicio1EsPrimo;