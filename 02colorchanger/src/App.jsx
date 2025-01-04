import { useState } from "react";

function MyApp() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* onClick={()=>setColor("red")} have to pass becuase on normal method you can t pass an arguments as we pass refrence onClick{setColor} there so call back function need */}
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=>setColor("red")} style={{ backgroundColor: "red" }}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=>setColor("green")} style={{ backgroundColor: "green" }}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=>setColor("blue")} style={{ backgroundColor: "blue" }}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=>setColor("olive")} style={{ backgroundColor: "olive" }}>Olive</button>
        </div>
      </div>
    </div>

  )
}

export default MyApp