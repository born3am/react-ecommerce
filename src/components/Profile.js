import React from 'react'

import {getAuth, signOut} from 'firebase/auth'
import { useNavigate} from 'react-router'

import { useContext } from 'react'

import { MyContext } from '../App'

const auth = getAuth()

export default function Profile() {

    const navigate = useNavigate()
    const {setUser, user} = useContext(MyContext)

    const logOutGoogle=()=>{
        signOut(auth).then(()=>{
            setUser(null)
            navigate("/" , {replace:true})
        })
        .catch(err=>{console.log(err.message)});
    }

    return (
        <div>
            <h1>{user.displayName}</h1>
            <img src={user.photoURL} alt="" />

            <button onClick={logOutGoogle}>logout</button>
        </div>
    )
}
