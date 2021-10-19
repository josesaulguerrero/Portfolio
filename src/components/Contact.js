//libraries and hooks
//assets
//components
import { SocialMedia } from "./SocialMedia";
import { Form } from './Form';

export const Contact = () => {
   return (
      <section className="Contact">
         <h2 className="title--small">Let's build great things together!</h2>
         <p className="text--large">
            Do you have any incredible ideas or questions? Then find me on:
         </p>
         <SocialMedia />
         <p>Or send me an email!</p>
         <Form />
      </section>
   );
};