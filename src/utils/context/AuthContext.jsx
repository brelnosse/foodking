import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext(null);

export const AdminContextProvider = ({children})=>{
    const [isAdmin, setIsAdmin] = useState(null);
    const [token, setToken] = useState('');

    const setUserToken = (token) => {
        localStorage.setItem('userToken', token)
    } 
    useEffect(()=>{
        const userToken = localStorage.getItem('userToken') || null;
        setToken(userToken);
        if(userToken){
            setIsAdmin(true);
        }else{
            setIsAdmin(false);
        }
    }, [token])
    return (
        <AdminContext.Provider value={{isAdmin, token, setUserToken}}>
            {children}
        </AdminContext.Provider>
    );
}