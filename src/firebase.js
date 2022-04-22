import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/storage";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";


const storage = getStorage(firebaseApp, "gs://facebook-clone-2a4d5.appspot.com/");



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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

export { auth, provider };
export default db;




