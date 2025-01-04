import {CardTemplate,Varcardtemplate} from './components/Card'
import './App.css'



//  tailwind can help you to write class for css property
//  for implmenting css property with responsiveness
// devui
function Card(){
  return (
    <>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"></img>
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
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
function App(){
  let myObj={
    name:"Dhruv Sharma",
    age:21
  }

  let studentDetail={
    reg:"21BCE0703",
    branch:"Computer Science And Engineering"
  }

  let newArr=[1,2,3,4]
  // {varName} to pass the variable in props use this other wise it will hard core the text 
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
    {/* <Tailwindprebuilt/> */}
    {/* <Card/> */}
    <CardTemplate varName="Props are passed" someObj={myObj}/>
    <Varcardtemplate userName="DhruvSharma" collegeInformation={studentDetail} Desc="Hey !! i am dhruv sharma"/>

    </>
    
  )
}

// jsx should return one element
// every tag should be closing tag here </img> added
function Tailwindprebuilt(){
  return (
    <>
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"></img>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure></>
  )
}

export default App
