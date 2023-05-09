import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminContext = createContext();

export const AdminProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));
    
    const [loggedIn, setLoggedIn] = useState(currentUser !== null ? true : false);

    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("user");
        setLoggedIn(false);
        navigate("/main/login");
    }

    return <AdminContext.Provider value={{ loggedIn, setLoggedIn, logout }} >
        {children}
    </AdminContext.Provider>
}

const useAdminContext = () => useContext(AdminContext);

export default useAdminContext;