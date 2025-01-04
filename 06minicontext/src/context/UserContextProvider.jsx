// Step 2 create provider
import React from "react";
import UserContext from "./UserContext";

// children are ui componets
const UserContextProvider = ({ children }) => {
  // data var set user for rec and setUser for data set
  const [user, setUser] = React.useState({});
  return (
    // value means this all parameters are access bile for all components i:e children
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
