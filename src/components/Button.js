//libraries and hooks
//components
//assets

export const Button = ({ size, disabled = false, children }) => {
   return (
      <button
         className={size}
         disabled={disabled}
      >{children}</button>
   );
};