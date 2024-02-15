import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";

export const signIn = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};

export const signUp = async (email: string, password: string) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const signOut = async () => {
  const response: any = await signOut();
  return response;
};
