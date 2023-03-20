import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore, setDoc, doc, collection, query, getDocs, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firebaseConfig } from "../../Firebase.config";

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore();

export const createProfile = async (id, email, name, hood, cp) => {
  await setDoc(doc(db, "users", id), { email, name, hood, cp });
};

export let info;
export const dataUser = async() => {
  const refinfo = doc(db, 'users', auth.currentUser.uid);
  
  const querySnapshot = await getDoc(refinfo);
   const info = querySnapshot.data();
  await AsyncStorage.setItem('name', info.name)
  
  
}

export default app;
