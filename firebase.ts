import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuthStore } from "./src/stores/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeYuPrbQFGuayZdGwXKyj-NWF0QfctuAE",
  authDomain: "e-commerce-site-77482.firebaseapp.com",
  projectId: "e-commerce-site-77482",
  storageBucket: "e-commerce-site-77482.firebasestorage.app",
  messagingSenderId: "777166686989",
  appId: "1:777166686989:web:9295a3ea4d40b7099d7e44",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

export const registerEmail = async (email: any, password: any) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const logout = async () => {
  const { logout } = useAuthStore.getState();
  await auth.signOut();
  await logout();
};
