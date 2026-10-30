import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/authService.js";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within the AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const AuthStatus = async () => {
        try {
            const userData = await authService.getCurrentUser();
            if (userData?.authenticated) {
                setUser(userData);
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error("error in check auth status", error);
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        AuthStatus();
    }, []);

    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error("error in logout", error);
        }
    };

    const loginWithGoogle = () => {
        authService.loginWithGoogle();
    };

    const loginWithGithub = () => {
        authService.loginWithGithub();
    };

    const value = {
        user,
        loading,
        isAuthenticated,
        AuthStatus,
        logout,
        loginWithGithub,
        loginWithGoogle,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};