import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYemtawBouOgcWb4gtBM8XHeIYwGa1LaY",
  authDomain: "reevents-de6f8.firebaseapp.com",
  databaseURL: "https://reevents-de6f8.firebaseio.com",
  projectId: "reevents-de6f8",
  storageBucket: "reevents-de6f8.appspot.com",
  messagingSenderId: "990808733245"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;