import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Blog.css';

const BlogPage = () => {
  // Blog data with unique IDs for each blog
  const blogs = [
    {
      id: 1,
      title: 'First Blog Post',
      description: 'This is a brief description of the first blog post.',
      image: 'https://t3.ftcdn.net/jpg/06/15/49/68/360_F_615496890_W34yB8VDE6n5pehb5QCt1ek5oEvRo9qA.jpg',
      link: '/blog/1', // Link to the individual blog post
    },
    {
      id: 2,
      title: 'Second Blog Post',
      description: 'This is a brief description of the second blog post.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s',
      link: '/blog/2',
    },
    {
      id: 3,
      title: 'Third Blog Post',
      description: 'This is a brief description of the third blog post.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s',
      link: '/blog/3',
    },
    {
      id: 4,
      title: 'Fourth Blog Post',
      description: 'This is a brief description of the fourth blog post.',
      image: 'https://cdn.pixabay.com/photo/2024/03/04/14/17/ai-generated-8612487_640.jpg',
      link: '/blog/4',
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
                  <p className="blog-card-description">{blog.description}</p>
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
