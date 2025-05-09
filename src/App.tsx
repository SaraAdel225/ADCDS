import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/landing';
import About from './pages/About';
import Location from './pages/location';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
        </Routes>
    </Router>
  );
};

export default App;
