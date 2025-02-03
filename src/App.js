import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import Main from "./COMPONENTS/BANNER/Main";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Navbar from "./COMPONENTS/NAVBAR/Navbar";
import Blog from "./COMPONENTS/BLOG/Blog";
import BlogDetail from "./COMPONENTS/BLOG/BLOGDETAILS/Blogdetails";
import PrivacyPolicy from "./COMPONENTS/PRIVACYPolicy/Privacypolicy";
import AboutUs from "./COMPONENTS/ABOUTUS/AboutUs";
import Predict from "./COMPONENTS/PREDICTOR/Predict";
import Pricing from "./COMPONENTS/PRICING/Pricing";

// Initialize Google Analytics
ReactGA.initialize("G-7HBRLGXP1K"); // Replace with your Measurement ID

// Page View Tracking Component
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <Router>
        <Analytics /> {/* Google Analytics Tracking */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/p" element={<Predict />} />
          <Route path="/pr" element={<Pricing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
