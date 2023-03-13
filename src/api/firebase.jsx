import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firebaseConfig } from "../../Firebase.config";
import { FIREBASE_API_KEY } from "@env";

console.log(FIREBASE_API_KEY);
console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore();

export const createProfile = async (id, email, name, hood, cp) => {
  await setDoc(doc(db, "users", id), { email, name, hood, cp });
};
export default app;
