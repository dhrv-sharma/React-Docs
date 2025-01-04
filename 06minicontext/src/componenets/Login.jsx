import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setName] = useState(null);

  const [password, setPass] = useState(null);

  // useContext is an hook used for context api and takes input which context u are using
  const { setUser } = useContext(UserContext);

  // setting data
  const handleSubmit = (e) => {
    e.preventDefault();
    // set data to context
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setName(e.target.value)}
      ></input>{" "}
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
      ></input>{" "}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
