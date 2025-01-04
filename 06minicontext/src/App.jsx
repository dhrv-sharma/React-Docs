import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./componenets/Login";
import Profile from "./componenets/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React Context Switching</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
