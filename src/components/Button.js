//libraries and hooks
//components
//assets
import '../assets/styles/Button.css';

export const Button = ({ size, disabled = false, children }) => {
   return (
      <button
         className={`Button--${size}`}
         disabled={disabled}
      >{children}</button>
   );
};