import { useContext } from "react";
import { AuthContext } from "../contextAPI/authProvider";

const useAuthProvider = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuthProvider;