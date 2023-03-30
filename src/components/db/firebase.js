import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRergCTOVXM_z88_AL196jP1RNQGp0_Ks",
  authDomain: "getcheckgo-madt.firebaseapp.com",
  projectId: "getcheckgo-madt",
  storageBucket: "getcheckgo-madt.appspot.com",
  messagingSenderId: "1032774099477",
  appId: "1:1032774099477:web:9c48f6d0323e931f04a41c",
  measurementId: "G-RTRP9NBB0M"
};

export const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);

export default DB;

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBRergCTOVXM_z88_AL196jP1RNQGp0_Ks",
//   authDomain: "getcheckgo-madt.firebaseapp.com",
//   projectId: "getcheckgo-madt",
//   storageBucket: "getcheckgo-madt.appspot.com",
//   messagingSenderId: "1032774099477",
//   appId: "1:1032774099477:web:9c48f6d0323e931f04a41c",
//   measurementId: "G-RTRP9NBB0M"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)


