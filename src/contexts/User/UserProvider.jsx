import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // save in cookie
  }, [isLoggedIn]);
  return (
    <UserContext value={{ isLoggedIn, setIsLoggedIn }}>{children}</UserContext>
  );
}

export default UserProvider;
