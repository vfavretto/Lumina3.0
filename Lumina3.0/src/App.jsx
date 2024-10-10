import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import Header from "./components/common/header";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Partners from "./components/pages/partners";
import Blog from "./components/pages/blog";
import Login from "./components/pages/login.jsx";
import Footer from "./components/common/footer";
import Profile from "./components/pages/profile.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
