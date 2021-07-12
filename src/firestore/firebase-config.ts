import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// var firebaseConfigs = {
//   apiKey: "AIzaSyDGgRA_or_P7wxc7Ty4HmgaUWTOki5x8Rs",
//   authDomain: "blog-ea896.firebaseapp.com",
//   projectId: "blog-ea896",
//   storageBucket: "blog-ea896.appspot.com",
//   messagingSenderId: "798740354455",
//   appId: "1:798740354455:web:d30b7cd170351c3822a0d2"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDGgRA_or_P7wxc7Ty4HmgaUWTOki5x8Rs",
  authDomain: "blog-ea896.firebaseapp.com",
  projectId: "blog-ea896",
  storageBucket: "blog-ea896.appspot.com",
  messagingSenderId: "798740354455",
  appId: "1:798740354455:web:d30b7cd170351c3822a0d2"
};

const firebaseConfigTesting = {
  apiKey: 'AIzaSyB7C5OmgXO9-e5vLozqJuMhPJNaZsTnGSo',
  authDomain: 'testing-databases-447ef.firebaseapp.com',
  projectId: 'testing-databases-447ef',
  storageBucket: 'testing-databases-447ef.appspot.com',
  messagingSenderId: '462826107758',
  appId: '1:462826107758:web:37ac34bd90b2898548c77f'
};

if( process.env.NODE_ENV === 'test' ) {
  // testing
  firebase.initializeApp(firebaseConfigTesting);
} else {
  firebase.initializeApp(firebaseConfig);
}


// Initialize Firebase

const db = firebase.firestore();

export { db, firebase }