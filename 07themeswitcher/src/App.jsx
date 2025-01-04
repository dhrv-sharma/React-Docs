import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setTheme] = useState("light");

  // though light them are just named but are empty so you can define the same method automaatically funcionality goes in the context
  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    //  wrap to  make components can access the data
    // lightTheme and darkTheme are empty so we need to refine it
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* {theme button} */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card  */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
