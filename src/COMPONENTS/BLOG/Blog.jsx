import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Blog.css';

// Import local images
import A1 from '../ASSESTS/A1.png';
import A2 from '../ASSESTS/A3.png';
import A3 from '../ASSESTS/A4.png';
import A4 from '../ASSESTS/A5.png';
import A5 from '../ASSESTS/A2.png';
import A6 from '../ASSESTS/A6.png';
import A7 from '../ASSESTS/A7.png';
import A8 from '../ASSESTS/A8.png';
import A9 from '../ASSESTS/A9.png';
import A10 from '../ASSESTS/A10.png';
import A11 from '../ASSESTS/A11.png';
import A12 from '../ASSESTS/A12.png';
import A13 from '../ASSESTS/A13.png';
import A14 from '../ASSESTS/A14.png';
import A15 from '../ASSESTS/A15.png';
import A16 from '../ASSESTS/A16.png';
import A17 from '../ASSESTS/A17.png';
import A18 from '../ASSESTS/A18.png';
import A19 from '../ASSESTS/A19.png';
import A20 from '../ASSESTS/A20.png';
import A21 from '../ASSESTS/A21.png';
import A22 from '../ASSESTS/A22.png';
import A23 from '../ASSESTS/A23.png';
import A24 from '../ASSESTS/A24.png';
import A25 from '../ASSESTS/A25.png';
import A26 from '../ASSESTS/A26.png';
import A27 from '../ASSESTS/A27.png';
import A28 from '../ASSESTS/A28.png';
import A29 from '../ASSESTS/A29.png';
import A30 from '../ASSESTS/A30.png';

const BlogPage = () => {
  // Blog data with unique IDs for each blog
  const blogs = [
    {
      id: 1,
      title: '10 Early Signs of a Heart Problem You Should Never Ignore',
      image: A1,
      link: '/blog/1', 
    },
    {
      id: 2,
      title: 'Heart Health in Your Hands: Simple Daily Habits to Lower Your Risk of a Heart Attack',
      image: A2,
      link: '/blog/2',
    },
    {
      id: 3,
      title: 'The Connection Between Stress and Heart Attacks: How to Protect Yourself',
      image: A3,
      link: '/blog/3',
    },
    {
      id: 4,
      title: 'Debunking 7 Common Myths About Heart Disease',
      image: A4,
      link: '/blog/4',
    },
    {
      id: 5,
      title: 'Superfoods for a Super Heart: The Ultimate Diet for Cardiovascular Health',
      image: A5,
      link: '/blog/5',
    },
    {
      id: 6,
      title: 'Can You Predict a Heart Attack? Science Says Yes!',
      image: A6,
      link: '/blog/6',
    },
    {
      id: 7,
      title: ' Are You at Risk? Top Risk Factors for Heart Disease You Should Know ',
      image: A7,
      link: '/blog/7',
    },
    {
      id: 8,
      title: 'Heart Disease in Women: Why It’s Different and What You Need to Know ',
      image: A8,
      link: '/blog/8',
    },
    {
      id: 9,
      title: 'How Exercise Can Be Your Heart s Best Friend And How to Get Started' ,
      image: A9,
      link: '/blog/9',
    },
    {
      id: 10,
      title: 'The Role of Sleep in Heart Health: Are You Getting Enough?',
      image: A10,
      link: '/blog/10',
    },
    {
      id: 11,
      title: 'Revolutionizing Heart Health: How AI is Transforming Cardiovascular Care',
      image: A11,
      link: '/blog/11',
    },
    {
      id: 12,
      title: 'Wearable Tech for Heart Health: The Future of Real-Time Monitoring',
      image: A12,
      link: '/blog/12',
    },
    {
      id: 13,
      title: 'Predictive Analytics in Cardiology: Forecasting Heart Disease Risks with Machine Learning',
      image: A13,
      link: '/blog/13',
    },
    {
      id: 14,
      title: 'Digital Twin Technology in Heart Health: A Virtual Revolution in Treatment',
      image: A14,
      link: '/blog/14',
    },
    {
      id: 15,
      title: 'Blockchain and Data Privacy in Cardiovascular Research: Unlocking New Possibilities',
      image: A15,
      link: '/blog/15',
    },
    {
      id: 16,
      title: 'IoT-Enabled Devices: A New Era of Heart Health Management at Home',
      image: A16,
      link: '/blog/16',
    },
    {
      id: 17,
      title: 'The Role of Genomics and Precision Medicine in Heart Disease Prevention',
      image: A17,
      link: '/blog/17',
    },
    {
      id: 18,
      title: 'Smartphone Applications for Heart Health: How Mobile Technology Saves Lives',
      image: A18,
      link: '/blog/18',
    },
    {
      id: 19,
      title: 'Deep Learning Algorithms for Early Detection of Cardiac Anomalies',
      image: A19,
      link: '/blog/19',
    },
    {
      id: 20,
      title: 'Telemedicine and Remote Cardiac Care: Enhancing Accessibility and Outcomes',
      image: A20,
      link: '/blog/20',
    },
    {
      id: 21,
      title: 'AI-Driven Fitness: How Artificial Intelligence Can Personalize Exercise Plans for Heart Health',
      image: A21,
      link: '/blog/21',
    },
    {
      id: 22,
      title: 'Predicting Heart Disease Risk: The Role of AI in Analyzing Exercise and Lifestyle Data',
      image: A22,
      link: '/blog/22',
    },
    {
      id: 23,
      title: 'Using AI to Monitor Heart Rate During Exercise: Enhancing Safety and Performance',
      image: A23,
      link: '/blog/23',
    },
    {
      id: 24,
      title: 'AI and Heart Health: How Machine Learning Models Can Optimize Exercise for Cardiovascular Recovery',
      image: A24,
      link: '/blog/24',
    },
    {
      id: 25,
      title: 'The Future of Heart Health: Combining Wearable Technology and AI to Revolutionize Cardiovascular Fitness',
      image: A25,
      link: '/blog/25',
    },
    {
      id: 26,
      title: 'The Role of Artificial Intelligence in Early Disease Detection: Transforming Patient Outcomes',
      image: A26,
      link: '/blog/26',
    },
    {
      id: 27,
      title: 'AI-Powered Personalized Medicine: The Future of Tailored Healthcare',
      image: A27,
      link: '/blog/27',
    },
    {
      id: 28,
      title: 'Revolutionizing Drug Discovery: How AI is Accelerating the Development of New Medicines',
      image: A28,
      link: '/blog/28',
    },
    {
      id: 29,
      title: 'The Impact of AI on Medical Imaging: From Diagnosis to Prognosis',
      image: A29,
      link: '/blog/29',
    },
    {
      id: 30,
      title: 'Ethical and Regulatory Challenges of Using AI in Healthcare',
      image: A30,
      link: '/blog/30',
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-header">Our Blog</h1>
      <div className="blog-list">
        <div className="blog-cards-container">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <Link to={blog.link} className="blog-card-link">
                <img src={blog.image} alt={blog.title} className="blog-card-image" />
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{blog.title}</h3>
                  {/* <p className="blog-card-description">{blog.description}</p> */}
                  <Link to={blog.link} className="blog-card-button">
                    Read More
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
