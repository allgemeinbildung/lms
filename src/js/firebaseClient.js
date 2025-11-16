import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { firebaseConfig } from './firebase-config.js';

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, firebaseApp, auth, db };
