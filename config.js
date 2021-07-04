import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDmVr-QAZo-dTTsSQsCKoo0UbS96VaCqgM",
  authDomain: "booksanta-45e8d.firebaseapp.com",
  projectId: "booksanta-45e8d",
  storageBucket: "booksanta-45e8d.appspot.com",
  messagingSenderId: "168234067646",
  appId: "1:168234067646:web:40c7a3c8b9559c6b0d60ef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()