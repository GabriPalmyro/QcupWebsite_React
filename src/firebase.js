import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCNd1FXvoS3QkbfsfwORj9UOhSXNRsEb2o",
    authDomain: "qcup2021.firebaseapp.com",
    projectId: "qcup2021",
    storageBucket: "qcup2021.appspot.com",
    messagingSenderId: "660932642022",
    appId: "1:660932642022:web:1a5092de7d9692e4ef2727"
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;