import '../css/footer.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CoffeeIcon from '@mui/icons-material/Coffee';
import SocButton from './buttons/SocButton';

function Contact() {
  return (
    <footer>
       <h5> Hey, let’s keep in touch</h5>
        <div className='contact_box'>
          
          <div className='contact_buttons'>
            
          </div>
          <div className='contact_img'>
            <SocButton link={'mailto:travinskristaps@gmail.com?subject=Me&body=Hello!'} icon={<MailOutlineIcon />}  name={"kristaptravins@gmail.com"}/>
            <SocButton link='https://www.buymeacoffee.com/kristapt' icon={<CoffeeIcon />}  name={"Buy me a  coffe "} />
          </div>
        </div>
    </footer>
  );
}

export default Contact;
