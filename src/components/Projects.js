import '../css/project.css';
import ProjectCard from './ProjecCard';

const Projects =()=> {
  return (
  <div className='project_box'>
      <h3>PROJECTS</h3>
      <div className='card_box'>
            <ProjectCard />
      </div>
  </div>
  );
}

export default Projects;
