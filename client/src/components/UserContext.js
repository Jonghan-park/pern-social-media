import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

const Context = ({ children }) => {
  const SERVER_URL = process.env.SERVER_URL;
  const [user, setUser] = useState(() => ({
    loggedIn: false,
  }));
  useEffect(() => {
    fetch(`${SERVER_URL}`, { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        console.log({ ...data });
        setUser({ ...data });
      });
  }, []);
  // get the user
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default Context;
