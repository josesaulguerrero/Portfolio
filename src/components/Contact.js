//libraries and hooks
//assets
import '../assets/styles/Contact.css';
//components

export const Contact = ({ children }) => {
   return (
      <section className="Contact" id='Contact'>
         <h2 className="Contact__title title--small">Let's build great things together!</h2>
         <p className="Contact__description text--large">
            Do you have any incredible ideas or questions? Then find me on:
         </p>
         {children}
      </section>
   );
};