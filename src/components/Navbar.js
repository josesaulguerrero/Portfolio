//libraries and hooks
//components
import { ThemeSwitch } from './ThemeSwitch';
import { MenuIcon } from './MenuIcon';
import { Menu } from './Menu';
//assets

export const Navbar = () => {
   return (
      <navbar className="Navbar">
         <ThemeSwitch />
         <MenuIcon />
         <Menu />
      </navbar>
   );
};