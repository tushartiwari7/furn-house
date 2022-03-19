import { createContext } from "react";
import { useState,useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {

  const [user,setUser] = useState({isLoggedIn: false});
  return (
    <UserContext.Provider value={{user,setUser}} >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);
