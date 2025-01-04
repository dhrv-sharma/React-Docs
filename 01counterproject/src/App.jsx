// import ing the useState hook from react 
//  hook are used to change the values in the ui simultaneously
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// babble for code injection for parsing the components
function App(){

  // let counter  = 5;
  // naming  can be diffenrece beacuse it is an array [] not in map {}
  // useState function return two var one is counter and another is setCounter
  // useState(inital Value)
  // counter is var 
  // setCounter(changedValue) is the function which corresponds to the ui changes 
  let [counter,setCounter]=useState(0);


  // add value
  const addValue=()=>{
    setCounter(counter+1);
    console.log("value addeed",counter);
  }

  // reduce value
  const reduceValue=()=>{
    setCounter(counter-1);
    console.log("Value reduced to ",counter)
  }

  const condAdd=()=>{
    if(counter==20){
      return;
    }
    //  if we call multiple setCounter(counter+1); only counter +1 update because ui updates are changes by batches so every isntance get the same value 
    setCounter(counter+1);
    // in order to have multiple updation 
    // setCounter((prevState)=>prevState+1); call in this manner to have multiple ui updates


  }

  const condSub=()=>{
    if(counter==0){
      return;
    }
    setCounter(counter-1);
  }
  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter Value : {counter}</h2>
    {/* addValue reference passed means execute only when clicked if addValue() got passed then it will execute without click */}
    <button onClick={condAdd}>Add Value {counter}</button>
    <br />
    <button onClick={condSub}>Remove Value {counter}</button>
    <p>footer : {counter}</p>
    </>

  )
}

export default App
