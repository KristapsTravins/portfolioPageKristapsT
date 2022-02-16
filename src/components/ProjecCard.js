import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import SocButton from './buttons/SocButton';
const ProjectCard =(props)=> {
 
  return (
    <div className='project_card'>
              <div className='card_img' style={{backgroundImage:`url(${props.img})`, backgroundSize:'cover', overflow:"hidden"}}>
               
              </div>
              <h4>{props.name}</h4>
              <p>{props.description}</p>
              <div className='tech_list'>
                  <p>{props.technologies.join('')}</p>
              </div>
              <div className='btn_place'>
              <SocButton link={props.link}  icon={<LinkIcon />} name={"View"} />
              <SocButton link={props.git} icon={<GitHubIcon />} name={"Github"} />
             
             
              
              </div>
 </div>
  );
}

export default ProjectCard;
