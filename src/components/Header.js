//libraries and hooks
//assets
import '../assets/styles/Header.css';
//components

export const Header = ({ children }) => {
   return (
      <header className="Header">
         {children}
      </header>
   );
};