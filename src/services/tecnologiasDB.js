import {app} from './firebase.js'

const bd = app.firestore();

const getAllTecnologias = collection(db, 'tecnologias');

const getTecnologiasOrderByDate = query(
    collection(db, 'tecnologias'),
    orderBy('createdAt', 'desc'),
    limit(100)
)

export {getAllTecnologias, getTecnologiasOrderByDate}