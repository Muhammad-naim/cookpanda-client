import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export const authContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState('true')
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const sighInWithSocials = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const seUserInfo = (name, imgUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgUrl
          })
    }
    const signInWithPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return  ()=> unsubscribe() 
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        seUserInfo,
        signInWithPassword,
        logOut,
        sighInWithSocials,
        resetPassword,
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