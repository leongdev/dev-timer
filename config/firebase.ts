import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDXI1SgGT6I41n1BMCwCpFgFsdKuzUA_Ss',
  authDomain: 'devtimer-aa86a.firebaseapp.com',
  projectId: 'devtimer-aa86a',
  storageBucket: 'devtimer-aa86a.appspot.com',
  messagingSenderId: '897414963912',
  appId: '1:897414963912:web:4ffe5d2ee6714b4c67fbfd',
  measurementId: 'G-KR09L1HYCE'
}

const firebaseApp = initializeApp(firebaseConfig)
const database = getFirestore(firebaseApp)

export default {
  database,
  firebaseApp
}
