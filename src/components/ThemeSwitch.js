//libraries and hooks
import { useContext } from 'react';
//components
// context
import { ThemeContext } from '../context/ThemeContext';
//assets
import '../assets/styles/ThemeSwitch.css';

export const ThemeSwitch = () => {
   const { setTheme } = useContext(ThemeContext);
   return (
      <section onClick={setTheme} className="ThemeSwitch">
         <div className="ThemeSwitch__ball"></div>
      </section>
   );
};