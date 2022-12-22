import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBgT0UfOOkdQ_cZvy1hB8Cf-0anGznDwcc",
  authDomain: "bicicletasmaneiraselegais.firebaseapp.com",
  projectId: "bicicletasmaneiraselegais",
  storageBucket: "bicicletasmaneiraselegais.appspot.com",
  messagingSenderId: "50833333633",
  appId: "1:50833333633:web:13b255b525c343be1e9c80"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
