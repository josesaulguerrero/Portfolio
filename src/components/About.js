//libraries and hooks
//components
//assets
import '../assets/styles/About.css';

export const About = () => {
   return (
      <section className="About" id='About'>
         <section className="About__content">
            <h2 className='About__title title--small'>A bit about me</h2>
            <p className='About__description text--large'>
               Hello! I am Jose, an enthusiast Full Stack developer who is always ready to learn more. I love building accessible and easy-to-use web applications and my goal is to create experiences that everyone will enjoy and remember.
               <br /> <br />
               In 💚️ with technology and continuous learning.
            </p>
         </section>
         <figure className="About__picture">
            <img
               width='260'
               height='260'
               src="https://i.postimg.cc/kMWCFBJd/image.png"
               alt="Jose's appearance"
               className="picture__img" />
         </figure>
      </section>
   );
};
