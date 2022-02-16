import '../css/title.css';
import '../css/soc_btn.css';
import '../css/keyword.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SocButton from './buttons/SocButton';


 const Title =()=> {
  return (
  <div className="title_outer">
    <div className='title_inner'>
            <h1>Hello , I'm</h1>
            <h2>Kristaps Traviņš</h2>
        <div className='description_box'>
            <p>I am a self taught <span>Front-end</span>  and talanted <span>Google</span> user, based in Riga, Latvia.I enjoy building things with <span>React</span> that live on the internet.</p>
        </div>
        <div className='soc_buttons'>

       
        <a href="https://github.com/KristapsTravins" rel="noreferrer" target="_blank"><SocButton icon={<GitHubIcon />} name={"Github"} /></a>
        <a href="https://www.linkedin.com/in/kristaps-travi%C5%86%C5%A1-40a30319b/" rel="noreferrer" target="_blank" ><SocButton icon={<LinkedInIcon />} name={"LinkedIn"} /></a>
        </div>
    </div>
  </div>
  );
}

export default Title;
