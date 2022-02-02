import '../css/title.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

 const Title =()=> {
  return (
  <div className="title_outer">
    <div className='title_inner'>
            <h1>Hello , I'm</h1>
            <h2>Kristaps Traviņš</h2>
        <div className='description_box'>
            <p>I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</p>
        </div>
        <div className='soc_buttons'>
        <div className='button'><div><MailOutlineIcon /><p>Email</p></div></div>
        <div className='button'><div><GitHubIcon /><p>Github</p></div></div>
        <div className='button'><div><LinkedInIcon /><p>Linkedin</p></div></div>
        </div>
    </div>
  </div>
  );
}

export default Title;
