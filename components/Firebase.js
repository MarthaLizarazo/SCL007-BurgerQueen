import Firebase from '../components/Firebase.js';

<script src="https://www.gstatic.com/firebasejs/5.9.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBr0Vqz631kSf8_mBzunPwILv3DNHD4nvo",
    authDomain: "burguerqueen-fb95e.firebaseapp.com",
    databaseURL: "https://burguerqueen-fb95e.firebaseio.com",
    projectId: "burguerqueen-fb95e",
    storageBucket: "burguerqueen-fb95e.appspot.com",
    messagingSenderId: "1003146480585"
  };
  firebase.initializeApp(config);
</script>

export default firestore;