import {app} from './firebase'
import {collection, getFirestore} from 'firebase/firestore'

//const db = app.firestore();
const db = getFirestore(app)

const getAllFrutas = collection(db, 'frutas');

export {getAllFrutas}