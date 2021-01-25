import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(TokenContext);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      // user already logged
      history.push("/users");
    }
  }, []);

  const handleSubmit = () => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    if (email && password) {
      axios
        .post(`${REACT_APP_SERVER_ADDRESS}/login/`, {
          email,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          setToken(data.token);
          localStorage.setItem("TOKEN", data.token);
          history.push("/users");
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    } else {
      alert("Please specify both email and password");
    }
  };

  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          placeholder="test@blabla.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          placeholder="***********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="button" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export default Login;
