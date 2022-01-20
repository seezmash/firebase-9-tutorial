import '../sass/app.scss'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

// Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyADV1-VXD6NmejhRB0ruUDDtX5LmbxKPg0',
  authDomain: 'fir-9-tutorial-4956c.firebaseapp.com',
  projectId: 'firebase-9-tutorial',
  storageBucket: 'firebase-9-tutorial.appspot.com',
  messagingSenderId: '758266714273',
  appId: '1:758266714273:web:a1e770085259bbe6b438e0'
}

const FirebaseApp = initializeApp(firebaseConfig)

// Next App
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
