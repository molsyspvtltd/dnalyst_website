import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        return token && userId ? { userId, token } : null;
    });

    const login = async (userId, password, navigate) => {
        try {
            console.log('Attempting login with:', { userId }); // Debug log
            
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, password }),
            });

            console.log('Login response status:', response.status); // Debug log

            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                    console.log('Login error details:', errorData); // Debug log
                } catch (e) {
                    errorData = { message: await response.text() };
                }
                throw new Error(errorData.message || `Login failed with status ${response.status}`);
            }

            const data = await response.json();
            console.log('Login successful, received data:', data); // Debug log

            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            setCurrentUser({
                userId: data.userId,
                name: data.name,
                token: data.token
            });

            if (navigate) navigate('/dashboard');
            return true;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const register = async (userId, password, name, email, navigate) => {
        try {
            console.log('Attempting registration with:', { userId, name, email }); // Debug log
            
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, password, name, email }),
            });

            console.log('Registration response status:', response.status); // Debug log

            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                    console.log('Registration error details:', errorData); // Debug log
                } catch (e) {
                    errorData = { message: await response.text() };
                }
                throw new Error(errorData.message || `Registration failed with status ${response.status}`);
            }

            console.log('Registration successful'); // Debug log
            if (navigate) navigate('/login');
            return true;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    };

    const logout = () => {
        console.log('Logging out user'); // Debug log
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setCurrentUser(null);
        return true;
    };

    const getAuthHeader = () => {
        const token = localStorage.getItem('token');
        console.log('Getting auth header with token:', token ? 'exists' : 'missing'); // Debug log
        return token ? { 'Authorization': `Bearer ${token}` } : {};
    };

    const value = {
        currentUser,
        login,
        logout,
        register,
        getAuthHeader,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}