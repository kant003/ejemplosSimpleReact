import {app} from './firebase.js'
import {collection, orderBy, limit, query} from 'firebase/firestore'
const db = getFirestore(app)

const getAllTecnologias = collection(db, 'tecnologias');

const getTecnologiasOrderByDate = query(
    collection(db, 'tecnologias'),
    orderBy('createdAt', 'desc'),
    limit(100)
)

export {getAllTecnologias, getTecnologiasOrderByDate}