import BlogpostMin from './BlogpostMin';
import LinkIcon from '@mui/icons-material/Link';
import SocButton from './buttons/SocButton';
import {
  Link
} from "react-router-dom";


function BlogSection() {
  return (
    <div className="blog_section">
      <h5>LATEST ARTICLES</h5>
      <BlogpostMin />
      <BlogpostMin />
      <div className='blog_btn'>
        <div>
           <Link to='/blog'><SocButton icon={<LinkIcon />} name={"See other posts"}  /></Link>
          
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
