import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams(); // Access the dynamic blog ID from the URL

  // Sample data for blogs (this could be fetched from an API or state)
  const blogs = [
    {
      id: 1,
      title: 'First Blog Post',
      content: 'This is the full content of the first blog post. It has more detailed information...',
    },
    {
      id: 2,
      title: 'Second Blog Post',
      content: 'This is the full content of the second blog post. It contains further elaboration...',
    },
    {
      id: 3,
      title: 'Third Blog Post',
      content: 'Here is the full content of the third blog post. It provides more in-depth knowledge...',
    },
    {
      id: 4,
      title: 'Fourth Blog Post',
      content: 'This is the complete content of the fourth blog post. It includes additional insights...',
    },
  ];

  // Find the blog that matches the ID from the URL
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
