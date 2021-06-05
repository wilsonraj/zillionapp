import firebase from 'firebase';

const config={
        apiKey: "AIzaSyBPGmNb7sa-47K_1aIpK82r4mnPpms25sk",
        authDomain: "zillionwilson.firebaseapp.com",
        projectId: "zillionwilson",
        storageBucket: "zillionwilson.appspot.com",
        messagingSenderId: "376094123323",
        appId: "1:376094123323:web:7b1fdd141378de84b5031e",
        measurementId: "G-ECHXEGPTDD"
    
}
const firebaseapp=firebase.initializeApp(config)

export default firebase;

export const db=firebaseapp.firestore();
export const auth=firebase.auth();
export const storage=firebase.storage();



//export {db,auth,storage}