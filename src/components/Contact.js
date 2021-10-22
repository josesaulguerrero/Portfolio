//libraries and hooks
//assets
import '../assets/styles/Contact.css';
//components
import { SocialMedia } from './SocialMedia';
import { FormHOC } from './FormHOC';
import { FormUI } from './FormUI';

export const Contact = ({ children }) => {
   return (
      <section className="Contact" id='Contact'>
         <h2 className="Contact__title title--small">Let's build great things together!</h2>
         <p className="Contact__description text--large">Do you have any incredible ideas or questions?</p>
         <p className="Contact__description will-disappear text--large">Then find me on:</p>
         <SocialMedia />
         <p className="Contact__description text--large will-disappear">Or</p>
         <p className='Contact__description text--large' >Send me an email!</p>
         <FormHOC Component={FormUI} />
      </section>
   );
};