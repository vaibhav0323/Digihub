import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));
    
    const [loggedIn, setLoggedIn] = useState(currentUser !== null ? true : false);

    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("user");
        setLoggedIn(false);
        navigate("/main/login");
    }

    return <UserContext.Provider value={{ loggedIn, setLoggedIn, logout }} >
        {children}
    </UserContext.Provider>
}

const useUserContext = () => useContext(UserContext);

export default useUserContext;