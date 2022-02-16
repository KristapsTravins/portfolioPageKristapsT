import Home from './pages/Home';

import './css/main.css';
import './css/blogpage.css';
import './css/blogsect.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
