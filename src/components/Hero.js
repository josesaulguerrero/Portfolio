//libraries and hooks
//components
import { Button } from './Button';
//assets
import '../assets/styles/Hero.css';

export const Hero = () => {
   return (
      <main className="Hero">
         <p className="Hero__greet text--large">Hi, I am</p>
         <h1 className='Hero__name title--large'>Jose Guerrero</h1>
         <h2 className="Hero__features title--small">& I create amazing experiences.</h2>
         <p className="Hero__introduction text--large">
            I'm a web developer who builds friendly user interfaces using HTML, CSS, JavaScript, and React, following some good practices like reusable, clean, and readable code, which leads to accessible, fast and smooth experiences.
         </p>
         <Button size='medium'>View work</Button>
      </main>
   );
};