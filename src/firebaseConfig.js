import firebase from 'firebase';


const firebaseConfig = {
	apiKey: "AIzaSyAujRvzoDsgx7AppK-cfBSV727KPwmz-kE",
	authDomain: "linkedin-ebe88.firebaseapp.com",
	projectId: "linkedin-ebe88",
	storageBucket: "linkedin-ebe88.appspot.com",
	messagingSenderId: "145650042286",
	appId: "1:145650042286:web:ad2d9c9e17ef68e8f0343f",
	measurementId: "G-YV2LJFGXWR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();




export {db, auth}