//libraries and hooks
//assets
//components

export const Contact = ({ children }) => {
   return (
      <section className="Contact">
         <h2 className="title--small">Let's build great things together!</h2>
         <p className="text--large">
            Do you have any incredible ideas or questions? Then find me on:
         </p>
         {children}
      </section>
   );
};