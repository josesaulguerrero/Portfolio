//libraries and hooks
import { useState } from 'react';
//components
import { Icon } from './Icon';
//assets
import Facebook from '../assets/pictures/facebook.png';
import Instagram from '../assets/pictures/Instagram.png';
import LinkedIn from '../assets/pictures/Linkedin.png';
import GitHub from '../assets/pictures/Github.png';

export const SocialMedia = () => {
   const [data] = useState([
      {
         name: 'Facebook',
         link: 'https://www.facebook.com/jose.guerreroserrano.1',
         image: Facebook
      },
      {
         name: 'Instagram',
         link: 'https://www.instagram.com/josesaulserrano_xd',
         image: Instagram
      },
      {
         name: 'LinkedIn',
         link: 'https://www.linkedin.com/in/jose-serrano-6b192317a',
         image: LinkedIn
      },
      {
         name: 'GitHub',
         link: 'https://github.com/josesaulguerrero',
         image: GitHub
      },
   ]);
   return (
      <section className="SocialMedia">
         {data.map(({ name, link, image }) =>
            <Icon
               key={name}
               name={name}
               link={link}
               image={image}
            />
         )}
      </section>
   );
};