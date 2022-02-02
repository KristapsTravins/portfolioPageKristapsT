import '../css/blogsect.css';
import Blogpost from './Blogpost';


function BlogSection() {
  return (
    <div className="blog_section">
        <h5>LATEST ARTICLES </h5>
        <Blogpost />
        <Blogpost />
    </div>
  );
}

export default BlogSection;
