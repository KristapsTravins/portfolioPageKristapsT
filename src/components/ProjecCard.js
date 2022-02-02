import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const ProjectCard =()=> {
  return (
    <div className='project_card'>
              <div className='card_img'>
              </div>
              <h4>Car Game </h4>
              <p>Proxy provider website including authentication, dashboard and dynamic features</p>
              <div className='tech_list'>
                  <p>React - CSS - html</p>
              </div>
              <div className='btn_place'>
              <div className='link_btn'><div className='inner_link'><LinkIcon /><p>View Project</p></div></div>
              <div className='link_btn'><div className='inner_link'><GitHubIcon /><p>Github</p></div></div>
              </div>
 </div>
  );
}

export default ProjectCard;
