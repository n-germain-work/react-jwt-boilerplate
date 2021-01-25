import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          localStorage.setItem("TOKEN", data.token);
          alert("Logged successfully");
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
