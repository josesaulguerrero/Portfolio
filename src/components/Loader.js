//libraries and hooks
//assets
import '../assets/styles/Spinner.css';
//components

export const Loader = () => {
   return (
      <div className='Loader'>
         <div className="ball--first"></div>
         <div className="ball--second"></div>
         <div className="ball--third"></div>
      </div>
   );
};