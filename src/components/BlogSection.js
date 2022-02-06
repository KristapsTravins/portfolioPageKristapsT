import BlogpostMin from './BlogpostMin';
import LinkIcon from '@mui/icons-material/Link';
import SocButton from './buttons/SocButton';

function BlogSection() {
  return (
    <div className="blog_section">
      <BlogpostMin />
      <BlogpostMin />
      <div className='blog_btn'>
        <div>
          <SocButton icon={<LinkIcon />}  name={"See other posts"}  />
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
