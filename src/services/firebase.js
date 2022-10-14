import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

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
    .then((res) => {
      db.collection("employees")
        .doc(res.user.uid)
        .set({
          name: res.user.displayName,
          phone: res.user.phoneNumber,
        })
        .then(() => {
          console.log("Successful");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    })
    .catch((error) => {
      console.log(error.message);
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
