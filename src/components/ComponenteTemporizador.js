import { useState, useEffect } from "react";

function ComponenteTemporizador() {

   const [count, setCount] = useState(0);

   useEffect(() => {
      let timer = setInterval(() => setCount(valorAnterior=>valorAnterior+1), 1000);
      return () => clearTimeout(timer)
   }, []);

   return <div>El contador vale {count} </div>;


}

export default ComponenteTemporizador;