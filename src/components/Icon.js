//libraries and hooks
//components
//assets

export const Icon = ({ name, link, image }) => {
   return (
      <a
         href={link}
         target='_blank'
         rel='noopener noreferrer'
         className="Icon"
         title={name}
      >
         <img
            src={image}
            alt={name}
            width='35'
            height='35'
         />
      </a>
   );
};