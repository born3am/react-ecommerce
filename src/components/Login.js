import React, { useEffect } from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth"
import GoogleButton from 'react-google-button'

import { useContext } from "react";
import { MyContext } from "../App";
import { useNavigate } from 'react-router';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY, 
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const GoogleProvider = new GoogleAuthProvider()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export default function Login() {

    const { setUser } = useContext(MyContext)
    const navigate = useNavigate()

    const loginWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(userInfo => {
                setUser(userInfo.user)
                navigate('/profile')
            })
            .catch(err => console.log(err.message))

    }

    // useEffect((() => {
    //     let subscribe = onAuthStateChanged(auth)
    //         .then(userInfo => {
    //             setUser(userInfo.user)
    //             navigate('/', { replace: true })
    //         })
    //         .catch(err => console.log(err.message))
    // return subscribe

    //     }, [])
    


return (
        <div>
            <h1>Google</h1>
            <GoogleButton onClick={loginWithGoogle} />



        </div>

    )
}

