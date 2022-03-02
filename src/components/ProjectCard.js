import '../assets/styles/Card.css';

export const Card = ({ data }) => {
   return (
      <article className="Card" key={data.name}>
         <img className="Card__image" src={data.imageUrl} width="250px" alt="" />
         <h1 className="Card__title">{data.name}</h1>
         <p className="Card__description text--medium" >{data.description}</p>
         <section className='Card__links'>
            <a href={data.githubLink} target="_blank" rel='noreferrer' className="text--medium githubLink">
               View Repo
            </a>
            <a href={data.siteLink} target="_blank" rel='noreferrer' className="text--medium siteLink">
               View app
            </a>
         </section>
      </article>
   );
};