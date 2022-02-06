import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import SocButton from './buttons/SocButton';
const ProjectCard =()=> {
  return (
    <div className='project_card'>
              <div className='card_img'>
              </div>
              <h4>Car Game </h4>
              <p>Proxy provider website including authentication, dashboard and dynamic features</p>
              <div className='tech_list'>
                  <p>React / CSS / html</p>
              </div>
              <div className='btn_place'>
              <SocButton icon={<LinkIcon />} name={"View"} />
              <SocButton icon={<GitHubIcon />} name={"Github"} />
              
              </div>
 </div>
  );
}

export default ProjectCard;
