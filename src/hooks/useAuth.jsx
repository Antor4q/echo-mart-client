import { useContext } from "react";
import { EchoContext } from "../Provider/AuthProvider";



const useAuth = () => {
    const auth = useContext(EchoContext)
    return (
        auth
    );
};

export default useAuth;