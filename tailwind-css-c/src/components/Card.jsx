import React from 'react'

// props are properties that are passed in function
// to pass the value in the ui component from one place to another it take props
//  props in argument can be replace by {varName,myObj}
function CardTemplate (props){
    console.log(props.varName);
    console.log(props.someObj.name);

    return(
        <>
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"></img>
            <div className="mt-6 mb-2">
              <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                Dhruv Sharma
              </span>
              <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
            </div>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
              amet
            </p>
          </div>
        </>
    )

}

// destructuring function props 
//  you can pass the default value in args as well for eg Desc have
// or the property u are using in html tags like <h1><userName || "Unknown"/h1>
function Varcardtemplate({userName,collegeInformation,Desc="Vellore Student"}){
    return (
        <>
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"></img>
            <div className="mt-6 mb-2">
              <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                {userName}
              </span>
              <h2 className="text-xl font-semibold tracking-wide">{collegeInformation.reg}</h2>
            </div>
            <p className="text-gray-300">
              {Desc}
            </p>
          </div>
        </>

    )
}

//  this file is for props concept 
//  where we learn basically to create resubable compnents 
export  {CardTemplate,Varcardtemplate}