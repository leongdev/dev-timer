import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs, collection, setDoc, doc, addDoc } from 'firebase/firestore'
import { IAuthReducer } from '../src/store/reducers/auth'
import { ActionTypes } from '../src/store/action/types/index'

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

export const consoleFirestore = async () => {
  const querySnapshot = await getDocs(collection(database, 'users'))
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
  })
}

export const setNewUser = async (userData: IAuthReducer, dispatch) => {
  try {
    const responseRef = await addDoc(collection(database, 'users'), {
      name: userData.userName,
      provider: userData.authProvider,
      email: userData.userEmail
    })

    dispatch({
      type: ActionTypes.SET_ID,
      payload: {
        userId: responseRef.id
      }
    })

    console.log(responseRef.id)
  } catch (error) {
    console.log('ERROR =>', error)
  }
}

export default {
  database,
  firebaseApp
}
