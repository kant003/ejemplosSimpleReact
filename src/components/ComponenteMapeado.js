function ComponenteMapeado(props){
    const nombres = ['naranja', 'limon', 'pera', 'manzana']
    return <ul>
       {   nombres.map(fruta=><li>{fruta}</li>)   }
    </ul>
}
export default ComponenteMapeado;