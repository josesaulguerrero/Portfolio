//libraries and hooks
//components
//assets

export const Button = ({ size, children }) => {
   return (
      <button className={size}>{children}</button>
   );
};