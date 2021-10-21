//libraries and hooks
import { useState } from 'react';
//components
import { ThemeSwitch } from './ThemeSwitch';
import { MenuIcon } from './MenuIcon';
import { Menu } from './Menu';
//assets
import '../assets/styles/Navbar.css';

export const Navbar = () => {
   const [visible, setVisible] = useState(false);
   const onClick = () => setVisible(prevState => !prevState);

   return (
      <nav className="Navbar">
         <ThemeSwitch />
         <MenuIcon onClick={onClick} isVisible={visible} />
         <Menu onClick={onClick} isVisible={visible} />
      </nav>
   );
};