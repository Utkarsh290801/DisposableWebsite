import { useState } from "react";
import { createContext } from "react";
//to create context 
export const UserContext = createContext();
//to create provider
export const UserProvider = ({ children,currentUser }) => {
    //to share the data across the components
    const [loggedIn, setLoggedIn] = useState(currentUser!==null);
    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider>
    )
};