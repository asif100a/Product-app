import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase-config/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    // States
    const [user, setUser] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // Providers
    const google_providers = new GoogleAuthProvider();

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

    // Sign In with Google
    const googleSignIn = () => {
        setIsPending(true);
        return signInWithPopup(auth, google_providers);
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
            const loggedUser = currentUser?.email;

            if (currentUser) {
                // Implement jwt verification
                const setToken = async () => {
                    const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/jwt`, { user: loggedUser }, {withCredentials: true});
                    console.log(data);
                };
                setToken();
            }
            else{
                const clearToken = async() => {
                    const {data} = await axios.post(`${import.meta.env.VITE_SERVER_URL}/signOut`, {clearToken: true}, {withCredentials: true});
                    console.log(data);
                };
                clearToken();
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
        googleSignIn,
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