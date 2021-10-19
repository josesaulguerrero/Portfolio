//libraries and hooks
//components
//assets

export const About = () => {
   return (
      <section className="About">
         <h2 className='title--small'>A bit about me</h2>
         <p className='text--large'>
            Hello! I am Jose, an enthusiast front-end programmer who is always ready to learn more. I love building accessible and easy-to-use web applications. My goal is to create experiences that everyone will enjoy and remember.

            In 💚️ with technology and continuous learning.
         </p>
         <figure className="About__picture">
            <img
               width='260'
               height='260'
               src="https://i.pinimg.com/736x/61/67/68/61676870ede744ccfe2aabc947e697a2.jpg"
               alt="Jose's appearance"
               className="picture__img" />
         </figure>
      </section>
   );
};