import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb2eFji_DK1EPbR38xri-elgHWxvrZU2I",
  authDomain: "kimberly-clark-adb29.firebaseapp.com",
  projectId: "kimberly-clark-adb29",
  storageBucket: "kimberly-clark-adb29.appspot.com",
  messagingSenderId: "379699341411",
  appId: "1:379699341411:web:1487a8a0126b8b2fdc3056",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const getRoomProgress = (roomId, snapshot) => {
  return db.collection("rooms").doc(roomId).onSnapshot(snapshot);
};

export const createRoom = async () => {
  return await db.collection("rooms").add({
    creatorProgress: 0,
    partnerProgress: 0,
    creatorScore: -1,
    partnerScore: -1,
  });
};

export const updateProgress = async (roomId, playerType) => {
  return await db
    .collection("rooms")
    .doc(roomId)
    .update({
      [playerType]: firebase.firestore.FieldValue.increment(1),
    });
};

export const updateScore = async (roomId, playerType, score) => {
  return await db
    .collection("rooms")
    .doc(roomId)
    .update({
      [playerType]: score,
    });
};
