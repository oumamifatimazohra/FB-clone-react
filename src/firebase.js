import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';





const firebaseConfig = {
  apiKey: "AIzaSyCNA49j-CLAG2TnkWPXtWXsaO0nAqneGIk",
  authDomain: "facebook-clone-2a4d5.firebaseapp.com",
  databaseURL: "https://facebook-clone-2a4d5-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-2a4d5",
  storageBucket: "facebook-clone-2a4d5.appspot.com",
  messagingSenderId: "315624546059",
  appId: "1:315624546059:web:400ab9be42e20f0cb18c0e",
  measurementId: "G-498LGF8880"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();



export { auth, provider };
export default db;




