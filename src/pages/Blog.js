import Header from '../components/Header';
import Blogpost from '../components/Blogpost';
const Blog = ()=> {
  return (
    <div className='center_wrapp'>
        <Header />
        <div className='content_box'>
           <div className='blog_section blogpage'>
           <h5>BLOG </h5>
               <Blogpost />
               <Blogpost />
               <Blogpost />
               <Blogpost />
               
           </div>
        </div>
  </div>
  );
}

export default Blog;
