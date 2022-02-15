import '../css/project.css';
import ProjectCard from './ProjecCard';
import data from '../sitedata/projects.json';

const Projects =()=> {
  console.log(data)
  return (
  <div className='project_box' id='projects'>
      <h3>PROJECTS</h3>
      <div className='card_box'>
        {data.map(i=>{
          return(
            <ProjectCard img={i['image-link']} nama={i.name}  description={i.description} technologies={i.technologies} git={i.git} />
          )
        })}

            {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}
      </div>
  </div>
  );
}

export default Projects;
