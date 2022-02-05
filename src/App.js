import Home from './pages/Home';
import Blog from './pages/Blog';
import './css/main.css';
import './css/blogpage.css';
import './css/blogsect.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Article from './pages/Article';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/art' element={<Article/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
