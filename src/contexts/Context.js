import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext()
const Context = ({children}) => {
    const[user,setUser]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('https://power-hacker-server.vercel.app/login')
        .then(data=>data.json())
        .then(result=>{
            setUser(result)
            setLoading(false)
        })
    },[])
    const authInfo={user,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;