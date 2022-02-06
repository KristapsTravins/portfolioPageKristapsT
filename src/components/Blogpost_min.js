import '../css/blogpost_min.css';
import LinkIcon from '@mui/icons-material/Link';
import SocButton from './buttons/SocButton';

 const Blogpost_min =()=> {
  return (
    <div className='blog_post'>
        <div className='blog_title'>
            <h5>How i worked with react and did everything that i wanted !</h5>
            <h6>20/10/2022</h6>
        </div>
        <div className='blog_desc'>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.
            </p>
        </div>
        <div className='blogpost_btn'>
        <SocButton icon={<LinkIcon />} name={"Read article"} />
        </div>
        
    </div>
  );
}

export default Blogpost_min;
