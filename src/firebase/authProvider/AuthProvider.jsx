import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";

export const authContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const sighInWithSocials = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const seUserInfo = (name, imgUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgUrl
          })
    }
    const signInWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return  ()=> unsubscribe() 
    }, [])
    const authInfo = {
        user,
        createUser,
        seUserInfo,
        signInWithPassword,
        logOut,
        sighInWithSocials,
        googleProvider,
        githubProvider,

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;