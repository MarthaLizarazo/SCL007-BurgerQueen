import firebase from 'firebase'

// Inicializo Firebase
  const config = {
    apiKey: "AIzaSyBr0Vqz631kSf8_mBzunPwILv3DNHD4nvo",
    authDomain: "burguerqueen-fb95e.firebaseapp.com",
    databaseURL: "https://burguerqueen-fb95e.firebaseio.com",
    projectId: "burguerqueen-fb95e",
    storageBucket: "burguerqueen-fb95e.appspot.com",
    messagingSenderId: "1003146480585"
  }

  firebase.initializeApp(config)

export const firebaseAuth = firebase.auth