//libraries and hooks
//components
//assets
import '../assets/styles/Projects.css';
import { projects } from '../data';
import { Card } from './ProjectCard';

export const Projects = () => {
   const renderCards = (projects) => {
      return projects.map(project => <Card data={project} />);
   };
   return (
      <section className="Projects" id='Work' aria-labelledby='projects_section_title'>
         <h2 className='Projects__title title--small' id='projects_section_title'>My projects</h2>
         <p className="Projects__description text--large">
            These are some projects that I’ve built along my way to become a Full Stack developer.
         </p>
         {renderCards(projects)}
      </section>
   );
};