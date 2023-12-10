"use client";
import React, { useEffect, useState } from "react";

const UserContext = React.createContext({
  loggedIn: false,
  user: null,
  // cart: null,
  login: () => {},
  logout: () => {},
});
const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ value: null });
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      setUser({ value: token });
      setLoggedIn(true);
    } else {
      // If no token in local storage, set loggedIn to false
      setLoggedIn(false);
    }
  }, []);

  const login = () => {
    // Implement login logic, such as fetching user credentials and updating login status
    if (user.value) {
      console.log("Token exists");
      setLoggedIn(true);
    }
  };

  const logout = () => {
    // Implement logout logic, such as invalidating user session and resetting login status
    setLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ loggedIn, login, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
