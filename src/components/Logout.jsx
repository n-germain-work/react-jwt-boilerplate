import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";

const Logout = () => {
  const { setToken } = useContext(TokenContext);
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("TOKEN");
    setToken(null);
    history.push("/login");
  }, []);

  return <div>Log out...</div>;
};

export default Logout;
