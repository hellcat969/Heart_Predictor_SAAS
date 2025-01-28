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
