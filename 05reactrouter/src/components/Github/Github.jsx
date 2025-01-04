import React, { useEffect, useState } from "react";
// hook used to receieve the load data from loader
import { useLoaderData } from "react-router";

// will run this function whenever this component get run
function GitHub() {
  const data = useLoaderData();
  //  useState
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/dhrv-sharma")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-row-reverse justify-evenly items-center">
      Github Followers:{data["followers"]}
      <img
        src={data["avatar_url"]}
        alt="profile"
        width={300}
        className="rounded-full"
      ></img>
    </div>
  );
}

export default GitHub;

export const githubinfoloader = async () => {
  console.log("Hellow");
  const response = await fetch("https://api.github.com/users/dhrv-sharma");
  return response.json();
};
