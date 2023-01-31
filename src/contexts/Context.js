import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext()
const Context = ({children}) => {
    const[user,setUser]=useState(false)
    const[loading,setLoading]=useState(true)
    const[tBill,setTBill]=useState([])
    const authInfo={user,loading,setUser,setLoading,tBill,setTBill}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;