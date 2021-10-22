import { useState, createContext } from "react";

export const ThemeContext = createContext('light');

export const ThemeContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(
      window.localStorage.getItem('theme')
         ? JSON.parse(window.localStorage.getItem('theme'))
         : 'light'
   );
   const handleSetTheme = () => {
      setTheme(prevTheme => {
         const newTheme = prevTheme === 'light' ? 'dark' : 'light';
         window.localStorage.setItem('Theme', JSON.stringify(newTheme));
         return newTheme;
      });
   };
   return (
      <ThemeContext.Provider value={{
         theme,
         setTheme: handleSetTheme
      }} >
         {children}
      </ThemeContext.Provider>
   );
};