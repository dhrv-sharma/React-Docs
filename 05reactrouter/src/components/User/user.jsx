import React from "react";
// hook is  used to catch the data from params in url link
import { useParams } from "react-router";

function User() {
  // parameters name should be same as in route
  const { userId } = useParams();

  return (
    <div className="bg-gray-600 px-4 py-4 text-3xl text-white mx-auto text-center">
      User:{userId}
    </div>
  );
}

export default User;
