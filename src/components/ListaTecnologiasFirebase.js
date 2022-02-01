import { onSnapshot } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { getAllTecnologias } from '../services/tecnologiasDB';
function ListaTecnologiasFirebase() {
    const [tecnologias, setTecnologias] = useState([]);

    useEffect(() => {
        const unsubcribe = onSnapshot(
            getAllTecnologias,
            (snapshot) => {
                setTecnologias(snapshot.docs.map(doc => doc.data()))
            }
        )
        return () => unsubcribe()
    }, [])

    return <div>
        {tecnologias.map(tecnologia => <div>{tecnologia.nombre}</div>)}
    </div>
}

export default ListaTecnologiasFirebase;