//libraries and hooks
//components
//assets
import '../assets/styles/MenuIcon.css';

export const MenuIcon = ({ onClick, isVisible }) => {
   return (
      <section
         className={`MenuIcon ${isVisible ? 'visible' : 'hidden'}`}
         onClick={onClick}
      >
         <div className='MenuIcon__line--first'></div>
         <div className='MenuIcon__line--second'></div>
         <div className='MenuIcon__line--third'></div>
      </section>
   );
};