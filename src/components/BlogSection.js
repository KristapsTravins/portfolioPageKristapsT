import '../css/blogsect.css';
import Blogpost from './Blogpost';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function BlogSection() {
  return (
    <div className="blog_section">
        <h5>LATEST ARTICLES </h5>
        <Blogpost />
        <Blogpost />
        <Blogpost />
      <div className='blog_link'>
          <div className='blog_link_btn'>
            <MailOutlineIcon />
            <p>Read more articles</p>
          </div>
      </div>
    </div>
  );
}

export default BlogSection;
