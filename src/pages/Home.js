import BlogSection from '../components/BlogSection';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Title from '../components/Title';
import Contact from '../components/Contact';

const Home =() => {
  return (
    <div className='center_wrapp'>
    <Header />
    <Title  />
    <Projects />
    <Contact />
  </div>
  );
}

export default Home;
