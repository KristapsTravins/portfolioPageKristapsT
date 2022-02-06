import '../css/title.css';
import '../css/soc_btn.css';
import '../css/keyword.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SocButton from './buttons/SocButton';


 const Title =()=> {
  return (
  <div className="title_outer">
    <div className='title_inner'>
            <h1>Hello , I'm</h1>
            <h2>Kristaps Traviņš</h2>
        <div className='description_box'>
            <p>I am a self taught Junior <span>Web developer</span>  and talanted <span>Google</span> user, based in Riga, Latvia.I enjoy creating things that live on the internet and working with different technologies. Mainly I work with <span>React</span> for the frontend and for the backend I like to use multiple languages like <span>Python</span> ,<span> Php</span>, and <span>Javascript</span>.</p>
        </div>
        <div className='soc_buttons'>
        <SocButton icon={<MailOutlineIcon />} name={"Email"} />
        <SocButton icon={<GitHubIcon />} name={"Github"} />
        <SocButton icon={<LinkedInIcon />} name={"LinkedIn"} />
        </div>
    </div>
  </div>
  );
}

export default Title;
