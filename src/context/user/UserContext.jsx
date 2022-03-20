import { createContext } from "react";
import { useState,useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {

  const [user,setUser] = useState({isLoggedIn: false});

  /**
   * Demo User Schema after login:
   * {
      "_id": "15adeed5-070a-4ffd-828a-11c86a110d56",
      "firstName": "Adarsh",
      "lastName": "Balika",
      "email": "adarshbalika@gmail.com",
      "createdAt": "2022-03-19T11:29:18+05:30",
      "updatedAt": "2022-03-19T11:29:18+05:30",
      "cart": "[]",
      "wishlist": "[]",
      "id": "1",
      "isLoggedIn": true
    }
   */

  return (
    <UserContext.Provider value={{user,setUser}} >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);
