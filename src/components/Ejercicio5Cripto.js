import { useEffect } from "react";
//api.gemini.com/v1/price
function Ejercicio5Cripto(props) {
    const [euros, setEuros] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.exchangeratesapi.io/latest");
            const data = await response.json();
            setEuros(data.rates.EUR);
        }
        fetchData();
    }, [])

    return <div>euros</div>;
}

export default Ejercicio5Cripto;