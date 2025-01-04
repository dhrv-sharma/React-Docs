import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// to convert this syntax in react understable we use bundlers like reactElement in customReact
// element function which return element object 
//  function notation
function MyApp(){
  return (
    <div>
      <h1>Custom App by JS function</h1>
    </div>
  )
}




// -----------------------------------
// element custom react which need function to parse 
// object notation
// const reactElement = {
//   type: 'a',
//   props : {
//       href : 'https://google.com',
//       target :'_blank'
//   },
//   children : 'Click me to visit google'
// }
// -----------------------------------




// element object 
// object notation
const anotherElement = (
  <a href="https://google.com" target='_blank'> Visit Google</a>
)


//  React have a built in method to create element (type tag , props {},text)
//  object notation
// evaluating expression
const frameWork="spring boot"
const reactElement = React.createElement(
  'a',{
    href: 'https//youtube.com',
    target : '_blank'
  },
  'click here for youtube ',
  frameWork
)



// this syntax is also allowed  when you are using the function notation for component
// MyApp() 
// <MyApp/>
// render function take jsx code which convert to css code
createRoot(document.getElementById('root')).render(

  // this syntax works when you are using the object notation  for object  compnent
  reactElement
  // <MyApp/>


)
