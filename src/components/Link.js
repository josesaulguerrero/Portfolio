//libraries and hooks
//components
//assets
import '../assets/styles/Link.css';

export const Link = ({ link, onClick, name }) => {
   return (
      <a
         href={link}
         className='Link'
         onClick={onClick}
      >{name}</a>
   );
};