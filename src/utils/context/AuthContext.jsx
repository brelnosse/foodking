import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext(null);

export const AdminContextProvider = ({children})=>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [token, setToken] = useState(null);

    // Set token and expiry (24h)
    const setUserToken = (newToken) => {
        if (!newToken) return;
        const expiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
        localStorage.setItem('userToken', newToken);
        localStorage.setItem('userTokenExpiry', String(expiry));
        setToken(newToken);
        setIsAdmin(true);
    };

    const clearUserToken = (redirect=true) => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userTokenExpiry');
        setToken(null);
        setIsAdmin(false);
        if(redirect){
            // outside Router so use location assignment
            window.location.href = '/admin';
        }
    }

    // Check token once on mount and start a periodic check
    useEffect(()=>{
        const userToken = localStorage.getItem('userToken');
        const expiryRaw = localStorage.getItem('userTokenExpiry');
        const expiry = expiryRaw ? parseInt(expiryRaw, 10) : null;

        if(userToken && expiry && Date.now() < expiry){
            setToken(userToken);
            setIsAdmin(true);
        } else {
            // token missing or expired
            clearUserToken(false);
        }

        // periodic check: every minute
        const intervalId = setInterval(()=>{
            const expiryRaw2 = localStorage.getItem('userTokenExpiry');
            const expiry2 = expiryRaw2 ? parseInt(expiryRaw2, 10) : null;
            if(!expiry2 || Date.now() > expiry2){
                // token expired -> clear and redirect to admin
                clearUserToken(true);
            }
        }, 60 * 1000);

        return ()=> clearInterval(intervalId);
    }, []);

    return (
        <AdminContext.Provider value={{isAdmin, token, setUserToken, clearUserToken}}>
            {children}
        </AdminContext.Provider>
    );
}