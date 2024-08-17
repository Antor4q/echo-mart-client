import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const EchoContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState("")
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=> unsubscribe()
    },[])

   const userInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleSign,
        logOut,
    }
    return (
       <EchoContext.Provider value={userInfo}>
         {children}
       </EchoContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node
}