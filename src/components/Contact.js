import '../css/footer.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CoffeeIcon from '@mui/icons-material/Coffee';

function Contact() {
  return (
    <footer>
       <h5> Hey, let’s keep in touch</h5>
       <div className='_btn'>
           <div className='inner_btn_email'>
            <MailOutlineIcon />
            <p>Email</p>
           </div>
       </div>
       <div className='_btn'>
           <div className='inner_btn_email'>
            <CoffeeIcon />
            <p>Buy me a coffe</p>
           </div>
       </div>
    </footer>
  );
}

export default Contact;
