import React from "react";
import './Blogcard.css';

const BlogCard = ({ image, title, description, link }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card-image" />
      <div class="headingg"><h3 className="blog-card-title">{title}</h3></div>
      <p className="blog-card-description">{description}</p>
      <a href={link} className="read-more-btn">Read More</a>
    </div>
  );
};

export default BlogCard;
