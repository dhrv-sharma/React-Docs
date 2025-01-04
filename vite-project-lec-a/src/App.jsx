//  first letter is always capital file name should be .jsx
import Widget from "./widget.jsx"

// we cant do this 
// as jsx should return a single tag 
// function App(){
//   return (
//     <p></p>
//     <Widget/>
//     <h1></h1>
//   )
// }


// fragment tag <></> to return multiple tag from a single jsx file 
function App(){
  return (
    <div>
      <h1>"without div tag also u can use fragmaent tag <></>"</h1>
      <Widget/>
      <h1>doing with this div tag</h1>
    </div>

  )
}


export default App