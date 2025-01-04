import { createContext,useContext } from "react";

// Step-1 :  create context
// Step-2 :  assigned default value optional
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

//  Step-3 make Provider
export const ThemeProvider = ThemeContext.Provider



// Step -4
//  custome hooks used to setcontext in useContext hooks
export default function useTheme(){
    return useContext(ThemeContext)
}