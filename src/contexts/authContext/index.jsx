import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user || null);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;