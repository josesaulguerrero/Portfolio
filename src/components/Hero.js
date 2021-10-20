//libraries and hooks
//components
import { Button } from './Button';
//assets
import '../assets/styles/Hero.css';

export const Hero = () => {
   return (
      <main className="Hero">
         <h1 className='title--large'>Jose Saul</h1>
         <h2 className="title--small">& I create amazing experiences.</h2>
         <p className="text--large">
            I'm a web developer who builds friendly user interfaces using HTML, CSS, JavaScript, and React, following some good practices like reusable, clean, and readable code, which leads to accessible, fast and smooth experiences.
         </p>
         <Button size='medium'>View work</Button>
      </main>
   );
};