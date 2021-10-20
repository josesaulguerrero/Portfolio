//libraries and hooks
//assets
import LogoImg from '../assets/pictures/logo.png';
//components

export const Logo = () => {
   return (
      <figure className="Logo">
         <img
            src={LogoImg}
            alt="Jose's logo"
            width='70'
            height='70'
            className="Logo__img" />
      </figure>
   );
};