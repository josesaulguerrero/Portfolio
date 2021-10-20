//libraries and hooks
//components
import { ThemeSwitch } from './ThemeSwitch';
import { MenuIcon } from './MenuIcon';
import { Menu } from './Menu';
//assets
import '../assets/styles/Navbar.css';

export const Navbar = () => {
   return (
      <nav className="Navbar">
         <ThemeSwitch />
         <MenuIcon />
         <Menu />
      </nav>
   );
};