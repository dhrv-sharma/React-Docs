//  useCallBack function for cache function implementation memoization
// useEffect to re-run  on change of dependencies
// useRef to link two tag
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPass] = useState("");

  // useRef hook null reference initial
  //  used here for higlighting text is copied
  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.focus();
    // passwordRef.current?.setSelectionRange(0, 6);

    // core funtionality
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useCallback(fn,[dependencies])
  // this is used for storing re-use futnino in cache for optimization
  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "$%&(#@)";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPass(pass);
    // setPass dependencies is used for optimization then no need
  }, [length, numAllow, charAllow, setPass]);

  // if you called that function it will lead to infinte loop of ui rendering
  // passGen()
  // if there is any change in the depednecies re run the
  useEffect(() => {
    passGen();
  }, [length, numAllow, charAllow, passGen]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-5  text-orange-500 bg-gray-800">
        <h1 className="text-4xl text-white text-center pt-[40px] mb-5">
          Password generator
        </h1>
        {/*  input area*/}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-4"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          ></input>
          <button
            onClick={copyPasswordToClipBoard}
            className="outline-none bg-blue-700 hover:bg-red-500 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        {/* text area */}
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              onChange={(e) => {
                setlength(e.target.value);
              }}
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
            />
            <label>Length : {length}</label>
          </div>

          <div className="flex items-center -gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="ml-2">
              Numbers
            </label>
          </div>

          <div className="flex items-center -gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput" className="ml-2">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
