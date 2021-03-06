import '../css/project.css';
import ProjectCard from './ProjecCard';
import data from '../sitedata/projects.json';

const Projects =()=> {

  return (
  <div className='project_box' id='projects'>
      <h3>PROJECTS</h3>
      <div className='card_box'>
        {data.map(i=>{
        
          return(
            <ProjectCard key={i.name} img={i['image-link']} name={i.name}  description={i.description} technologies={i.technologies} git={i.git} link={i.link} />
          )
        })}
      </div>
  </div>
  );
}

export default Projects;
