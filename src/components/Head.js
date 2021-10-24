//libraries and hooks
import { Helmet } from 'react-helmet';
//components
//assets

export const Head = () => {
   return (
      <Helmet>
         <meta name="title" content='Jose Guerrero' />
         <meta name="description" content="This is a webpage where I talk about me and the projects I have built along my way to become a front-end developer." />
         {/* open graph */}
         <meta property="og:title" content="Jose Guerrero" />
         <meta property="og:type" content="website" />
         <meta property="og:image" content="https://i.postimg.cc/KvR9kvJ1/Screenshot-from-2021-10-24-09-23-24.png" />
         <meta property="og:image:alt" content="website screenshoot" />
         <meta property="og:image:type" content="image/png" />
         <meta property="og:url" content="https://joseguerrero.vercel.app" />
         <meta property="og:description" content="This is a webpage where I talk about me and the projects I have built along my way to become a front-end developer." />
         <meta property="og:site_name" content="Jose Guerrero" />
         {/* twitter cards */}
         <meta name="twitter:title" content="Jose Guerrero" />
         <meta name="twitter:description" content="This is a webpage where I talk about me and the projects I have built along my way to become a front-end developer." />
         <meta name="twitter:image" content="https://i.postimg.cc/KvR9kvJ1/Screenshot-from-2021-10-24-09-23-24.png" />
      </Helmet>
   );
};