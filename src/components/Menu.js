//libraries and hooks
import { useState } from 'react';
//assets
import '../assets/styles/Menu.css';
//components
import { Link } from './Link';

export const Menu = ({ onClick, isVisible }) => {
   const [links] = useState([
      {
         name: 'About',
         link: '#About',
      },
      {
         name: 'Work',
         link: '#Work',
      },
      {
         name: 'Contact',
         link: '#Contact'
      }
   ]);
   return (
      <section
         className={`Menu ${isVisible ? 'visible' : 'hidden'}`}
      >
         {
            links.map(({ name, link }) =>
               <Link
                  key={name}
                  name={name}
                  link={link}
                  onClick={onClick}
               />
            )
         }
      </section>
   );
};