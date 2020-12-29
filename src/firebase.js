import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC9MruEgpURA819b7A4MFuFzARVfAoO92Q",
    authDomain: "todo-list-4bf72.firebaseapp.com",
    databaseURL: "https://todo-list-4bf72.firebaseio.com",
    projectId: "todo-list-4bf72",
    storageBucket: "todo-list-4bf72.appspot.com",
    messagingSenderId: "988587438769",
    appId: "1:988587438769:web:89dd206d429878aa332890"
  });

  export { firebaseConfig as firebase };