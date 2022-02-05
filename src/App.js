import Home from './pages/Home';
import Blog from './pages/Home';
import './css/main.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Home />
    </div>
  );
}

export default App;
