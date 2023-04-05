
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAB-cEa3bKqU4Yyy5d83NiG-YTwMLckUIk",
  authDomain: "vue3firebase9-a6415.firebaseapp.com",
  projectId: "vue3firebase9-a6415",
  storageBucket: "vue3firebase9-a6415.appspot.com",
  messagingSenderId: "676581267111",
  appId: "1:676581267111:web:77e91efd585f37671aed82"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectFirestore = firebaseApp.firestore();
const project=firebaseApp.firestore();
const auth = firebase.auth();
export { auth, projectFirestore,project };