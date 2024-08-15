import { createContext, useState } from 'react';
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../Firebase-config/firebase.config';

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

    const values = {
        signUpUser,
        signInUser
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