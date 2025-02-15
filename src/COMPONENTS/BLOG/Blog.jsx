import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Blog.css';

// Import local images
import A1 from '../ASSESTS/A1.webp';
import A2 from '../ASSESTS/A2.webp';
import A3 from '../ASSESTS/A3.webp';
import A4 from '../ASSESTS/A4.webp';
import A5 from '../ASSESTS/A5.webp';
import A6 from '../ASSESTS/A6.webp';
import A7 from '../ASSESTS/A7.webp';
import A8 from '../ASSESTS/A8.webp';
import A9 from '../ASSESTS/A9.webp';
import A10 from '../ASSESTS/A10.webp';
import A11 from '../ASSESTS/A11.webp';
import A12 from '../ASSESTS/A12.webp';
import A13 from '../ASSESTS/A13.webp';
import A14 from '../ASSESTS/A14.webp';
import A15 from '../ASSESTS/A15.webp';
import A16 from '../ASSESTS/A16.webp';
import A17 from '../ASSESTS/A17.webp';
import A18 from '../ASSESTS/A18.webp';
import A19 from '../ASSESTS/A19.webp';
import A20 from '../ASSESTS/A20.webp';
import A21 from '../ASSESTS/A21.webp';
import A22 from '../ASSESTS/A22.webp';
import A23 from '../ASSESTS/A23.webp';
import A24 from '../ASSESTS/A24.webp';
import A25 from '../ASSESTS/A25.webp';
import A26 from '../ASSESTS/A26.webp';
import A27 from '../ASSESTS/A27.webp';
import A28 from '../ASSESTS/A28.webp';
import A29 from '../ASSESTS/A29.webp';
import A30 from '../ASSESTS/A30.webp';
import A31 from '../ASSESTS/A31.webp';
import A32 from '../ASSESTS/A32.webp';

// Define the generateSlug function here if needed
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
};

const BlogPage = () => {
  // Blog data with unique IDs for each blog
  const blogs = [
    {
      id: 1,
      title: '10 Early Signs of a Heart Attack You Should Never Ignore',
      desc : 'This is the snippet of this data article',
      image: A1,
      link: `/blog/${generateSlug('10 Early Signs of a Heart Attack You Should Never Ignore')}`, 
    },
    {
      id: 2,
      title: 'Heart Attack Supplements: Essential Nutrients for a Healthy Heart',
      image: A2,
      link: `/blog/${generateSlug('Heart Attack Supplements: Essential Nutrients for a Healthy Heart')}`,
    },
    {
      id: 3,
      title: 'Congestive Heart Failure ICD-10: Symptoms, Causes, Stages and Treatment',
      image: A3,
      link: `/blog/${generateSlug('Congestive Heart Failure ICD-10: Symptoms, Causes, Stages and Treatment')}`,
    },
    {
      id: 4,
      title: 'Diastolic Heart Failure: Symptoms, Causes, Treatment, and Myths',
      image: A4,
      link: `/blog/${generateSlug('Diastolic Heart Failure: Symptoms, Causes, Treatment, and Myths')}`,
    },
    {
      id: 5,
      title: 'What is Quick Quack Heart Attack Risk Prediction?',
      image: A5,
      link: `/blog/${generateSlug('What is Quick Quack Heart Attack Risk Prediction?')}`,
    },
    {
      id: 6,
      title: 'Can You Predict a Heart Attack? Science Says Yes!',
      image: A6,
      link: `/blog/${generateSlug('Can You Predict a Heart Attack? Science Says Yes!')}`,
    },
    {
      id: 7,
      title: ' Quick Quack-Services, Heart Attack Risk Calculator, Car Wash Center and Heart Health CO.',
      image: A7,
      link: `/blog/${generateSlug('Quick Quack-Services, Heart Attack Risk Calculator, Car Wash Center and Heart Health CO.')}`,
    },
    {
      id: 8,
      title: 'Heart Disease in Women: Why It’s Different and What You Need to Know ',
      image: A8,
      link: `/blog/${generateSlug('Heart Disease in Women: Why It’s Different and What You Need to Know ')}`,
    },
    {
      id: 9,
      title: 'How Exercise Can Be Your Heart s Best Friend And How to Get Started' ,
      image: A9,
      link:  `/blog/${generateSlug('How Exercise Can Be Your Heart s Best Friend And How to Get Started')}`,
    },
    {
      id: 10,
      title: 'Dr. Oz Diabetes Treatment: A Comprehensive Guide to Managing Diabetes Naturally',
      image: A10,
      link: `/blog/${generateSlug('Dr. Oz Diabetes Treatment: A Comprehensive Guide to Managing Diabetes Naturally')}`,
    },
    {
      id: 11,
      title: 'Revolutionizing Heart Health: How AI is Stopping Myocardial infarction',
      image: A11,
      link: `/blog/${generateSlug('Revolutionizing Heart Health: How AI is Stopping Myocardial infarction')}`,
    },
    {
      id: 12,
      title: 'Wearable Tech for Heart Health: The Future of Real-Time Monitoring',
      image: A12,
      link: `/blog/${generateSlug('Wearable Tech for Heart Health: The Future of Real-Time Monitoring')}`,
    },
    {
      id: 13,
      title: 'Predictive Analytics in Cardiology: Forecasting Heart Attack Risks with Machine Learning',
      image: A13,
      link: `/blog/${generateSlug('Predictive Analytics in Cardiology: Forecasting Heart Attack Risks with Machine Learning')}`,
    },
    {
      id: 14,
      title: 'Digital Twin Technology in Heart Health: A Virtual Revolution in Treatment',
      image: A14,
      link: `/blog/${generateSlug('Digital Twin Technology in Heart Health: A Virtual Revolution in Treatment')}`,
    },
    {
      id: 15,
      title: 'Blockchain and Data Privacy in Heart Attack Research: Unlocking New Possibilities',
      image: A15,
      link: `/blog/${generateSlug('Blockchain and Data Privacy in Heart Attack Research: Unlocking New Possibilities')}`,
    },
    {
      id: 16,
      title: 'IoT-Enabled Devices: A New Era of Heart Health Management at Home',
      image: A16,
      link: `/blog/${generateSlug('IoT-Enabled Devices: A New Era of Heart Health Management at Home')}`,
    },
    {
      id: 17,
      title: 'The Role of Genomics and Precision Medicine in Heart Attack Prevention',
      image: A17,
      link: `/blog/${generateSlug('The Role of Genomics and Precision Medicine in Heart Attack Prevention')}`,
    },
    {
      id: 18,
      title: 'Smartphone Applications for Heart Health: How Mobile Technology Saves Lives',
      image: A18,
      link: `/blog/${generateSlug('Smartphone Applications for Heart Health: How Mobile Technology Saves Lives')}`,
    },
    {
      id: 19,
      title: 'Deep Learning Algorithms for Early Detection of Myocardial infarction',
      image: A19,
      link: `/blog/${generateSlug('Deep Learning Algorithms for Early Detection of Myocardial infarction')}`,
    },
    {
      id: 20,
      title: 'Telemedicine and Remote Cardiac Care: Enhancing Accessibility and Outcomes',
      image: A20,
      link: `/blog/${generateSlug('Telemedicine and Remote Cardiac Care: Enhancing Accessibility and Outcomes')}`,
    },
    {
      id: 21,
      title: 'AI-Driven Fitness: How Artificial Intelligence Can Personalize Exercise Plans for Heart Health',
      image: A21,
      link: `/blog/${generateSlug('AI-Driven Fitness: How Artificial Intelligence Can Personalize Exercise Plans for Heart Health')}`,
    },
    {
      id: 22,
      title: 'Predicting Heart Attack Risk: The Role of AI in Analyzing Exercise and Lifestyle Data',
      image: A22,
      link: `/blog/${generateSlug('Predicting Heart Attack Risk: The Role of AI in Analyzing Exercise and Lifestyle Data')}`,
    },
    {
      id: 23,
      title: 'Using AI to Monitor Heart Rate During Exercise: Enhancing Safety and Performance',
      image: A23,
      link: `/blog/${generateSlug('Using AI to Monitor Heart Rate During Exercise: Enhancing Safety and Performance')}`,
    },
    {
      id: 24,
      title: 'AI and Heart Health: How Machine Learning Models Can Optimize Exercise for Myocardial infarction',
      image: A24,
      link: `/blog/${generateSlug('AI and Heart Health: How Machine Learning Models Can Optimize Exercise for Myocardial infarction')}`,
    },
    {
      id: 25,
      title: 'The Future of Heart Health: Combining Wearable Technology and AI to Revolutionize Cardiovascular Fitness',
      image: A25,
      link: `/blog/${generateSlug('The Future of Heart Health: Combining Wearable Technology and AI to Revolutionize Cardiovascular Fitness')}`,
    },
    {
      id: 26,
      title: 'The Role of Artificial Intelligence in Early Disease Detection: Transforming Patient Outcomes',
      image: A26,
      link: `/blog/${generateSlug('The Role of Artificial Intelligence in Early Disease Detection: Transforming Patient Outcomes')}`,
    },
    {
      id: 27,
      title: 'AI-Powered Personalized Medicine: The Future of Tailored Healthcare',
      image: A27,
      link: `/blog/${generateSlug('AI-Powered Personalized Medicine: The Future of Tailored Healthcare')}`,
    },
    {
      id: 28,
      title: 'Revolutionizing Drug Discovery: How AI is Accelerating the Development of New Medicines',
      image: A28,
      link: `/blog/${generateSlug('Revolutionizing Drug Discovery: How AI is Accelerating the Development of New Medicines')}`,
    },
    {
      id: 29,
      title: 'The Impact of AI on Medical Imaging: From Diagnosis to Prognosis',
      image: A29,
      link: `/blog/${generateSlug('Revolutionizing Drug Discovery: How AI is Accelerating the Development of New Medicines')}`,
    },
    {
      id: 30,
      title: 'Ethical and Regulatory Challenges of Using AI in Healthcare',
      image: A30,
      link: `/blog/${generateSlug('Ethical and Regulatory Challenges of Using AI in Healthcare')}`,
    },
    {
      id: 31,
      title: 'Artificial Intelligence saving Myocardial infarction',
      image: A31,
      link: `/blog/${generateSlug('Artificial Intelligence saving Myocardial infarction')}`,
    },
    {
      id: 32,
      title: 'Understanding Myocardial Infarction, Symptoms, Causes and Instant Treatment',
      image: A32,
      link: `/blog/${generateSlug('Understanding Myocardial Infarction, Symptoms, Causes and Instant Treatment')}`,
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
