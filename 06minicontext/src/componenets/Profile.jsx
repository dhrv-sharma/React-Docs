import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  // receive UserContext though useContext
  const { user } = useContext(UserContext);

  if (!user.username) return <div>Please Login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
