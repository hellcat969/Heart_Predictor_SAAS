import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './COMPONENTS/BANNER/Main';
import Footer from './COMPONENTS/FOOTER/Footer';
import Navbar from './COMPONENTS/NAVBAR/Navbar';
import Blog from './COMPONENTS/BLOG/Blog';
import BlogDetail from './COMPONENTS/BLOG/BLOGDETAILS/Blogdetails'; // Import the BlogDetail component
import PrivacyPolicy from './COMPONENTS/PRIVACYPolicy/Privacypolicy';
import AboutUs from './COMPONENTS/ABOUTUS/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} /> {/* Blog Detail Route */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
