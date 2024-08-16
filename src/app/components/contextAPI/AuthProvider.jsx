import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase-config/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    // States
    const [user, setUser] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // Providers
    // const google_providers = ;

    // Sign Up with email and password
    const signUpUser = (email, password) => {
        setIsPending(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign In with email and password
    const signInUser = (email, password) => {
        setIsPending(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign out the user
    const signOutUser = () => {
        setIsPending(true);
        return signOut(auth);
    };

    // User state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsPending(false);
            console.log(currentUser);
            const loggedUser = currentUser?.email || user?.email;

            if (currentUser || user) {
                // Implement jwt verification
                const jwtFunction = async () => {
                    const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/jwt`, { user: loggedUser });
                    console.log(data);
                };
                jwtFunction();
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const values = {
        signUpUser,
        signInUser,
        signOutUser,
        user,
        isPending,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;