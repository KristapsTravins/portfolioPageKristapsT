import BlogSection from './components/BlogSection';
import Header from './components/Header';
import Projects from './components/Projects';
import Title from './components/Title';
import Contact from './components/Contact';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <div className='center_wrapp'>
        <Header />
        <Title  />
        <Projects />
        <BlogSection />
        <Contact />
      </div>
    </div>
  );
}

export default App;
