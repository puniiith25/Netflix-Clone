import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9jyFtcA7uEzIKzSBd2kOox3YO4ApBslA",
  authDomain: "netflix-clone-3e1e8.firebaseapp.com",
  projectId: "netflix-clone-3e1e8",
  storageBucket: "netflix-clone-3e1e8.appspot.com",
  messagingSenderId: "1089883560854",
  appId: "1:1089883560854:web:8413f67c2fffe4eb98dbb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const Signup = async (name,email,password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth , email ,password);
    const user = res.user
    await addDoc(collection(db ,'user'),{
      uid: user.uid,
      name,
      authProvider:"local",
      email,
    })
  } catch (error) {
    console.log(error);
    alert(error)
  }

}

const SignIn = async (email ,password)=>{
 try {
  await signInWithEmailAndPassword(auth ,email ,password)
 } catch (error) {
  console.log(error)
  alert(error)
  
 }

}

const SingOut = async ()=>{
  await signOut(auth)
}
export  { auth , db , Signup , SignIn, SingOut}