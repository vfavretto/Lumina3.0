import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/header';
import Home from './components/pages/home';
import About from './components/pages/about';
import Partners from './components/pages/partners';
import Blog from './components/pages/blog';
import Login from './components/pages/login';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
