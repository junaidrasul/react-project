import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import About from '../pages/About.jsx';
import Contact from '../pages/login.jsx';
import Home from '../pages/Home.jsx';
import Navbar from '../components/NavBar.jsx';
import MoreInfo from '../pages/MoreInfo.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Contact />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;