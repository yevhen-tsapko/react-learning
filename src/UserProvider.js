import { createContext, useContext, useState } from "react";
const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [isLogIn, setIsLogIn] = useState(false);

  const logIn = () => {
    setIsLogIn(true);
    setUserName("Mango");
  };
  const logOut = () => {
    setIsLogIn(false);
    setUserName(null);
  };

  return (
    <UserContext.Provider value={{ logIn, logOut, isLogIn, userName }}>
      {children}
    </UserContext.Provider>
  );
};
