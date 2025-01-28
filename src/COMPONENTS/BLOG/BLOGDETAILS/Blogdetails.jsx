import React from 'react';
import { useParams } from 'react-router-dom';

import './Blogdetails.css';

const BlogDetail = () => {
  const { id } = useParams();

  // Array containing multiple blog articles
  const blogs = [
    {
      "id": "1",
      "title": "10 Early Signs of a Heart Problem You Should Never Ignore",
      "introduction": "Heart disease remains one of the leading causes of death worldwide. Unfortunately, many people overlook early warning signs, mistaking them for minor health issues or everyday stress. Identifying these symptoms early can be life-saving, as it allows timely intervention and preventive care. Below, we delve into the ten early signs of a heart problem that you should never ignore. Understanding these signals could make the difference between life and death.",
      "signs": [
      {
      "number": 1,
      "title": "Chest Discomfort or Pain",
      "description": "Chest pain, also known as angina, is one of the most common early signs of heart trouble. It often feels like pressure, squeezing, fullness, or pain in the chest area. While it’s not always a heart attack, recurring chest discomfort could signal blocked or narrowed arteries, reducing blood flow to the heart.",
      "key_details": [
      "Pain may spread to the shoulders, arms, neck, jaw, or back.",
      "It can last a few minutes or come and go.",
      "It often occurs during physical activity or stress and subsides with rest."
      ],
      "note": "If you experience unexplained or severe chest pain, seek medical attention immediately."
      },
      {
      "number": 2,
      "title": "Shortness of Breath",
      "description": "Shortness of breath, or dyspnea, often accompanies heart problems, even in the absence of chest pain. It can occur during physical exertion, rest, or while lying down. This symptom might indicate congestive heart failure or a buildup of fluid in the lungs due to reduced heart efficiency.",
      "key_details": [
      "Persistent difficulty in breathing, especially when lying flat, is concerning.",
      "May occur with swelling in the ankles or fatigue."
      ],
      "note": "Don’t dismiss unexplained shortness of breath, as it might indicate underlying heart disease."
      },
      {
      "number": 3,
      "title": "Fatigue and Weakness",
      "description": "Feeling unusually tired or weak, even after adequate rest, could be a sign that your heart is struggling to pump blood effectively. This symptom is particularly common in women and often precedes other signs of a heart attack.",
      "key_details": [
      "Fatigue that disrupts daily activities.",
      "Feeling exhausted without exertion.",
      "Symptoms worsen as the day progresses."
      ],
      "note": "Persistent fatigue should not be ignored, especially if accompanied by other symptoms like dizziness or shortness of breath."
      },
      {
      "number": 4,
      "title": "Irregular Heartbeat (Arrhythmia)",
      "description": "An irregular heartbeat, or arrhythmia, can feel like your heart is racing, fluttering, or skipping beats. While occasional irregularities are common, frequent or severe occurrences may indicate a problem with the heart’s electrical system.",
      "key_details": [
      "Rapid heartbeat without physical activity.",
      "Dizziness or lightheadedness accompanies the irregularity.",
      "Episodes lasting more than a few minutes."
      ],
      "note": "If you frequently notice an irregular heartbeat, consult a doctor for further evaluation."
      },
      {
      "number": 5,
      "title": "Swelling in the Legs, Ankles, or Feet",
      "description": "Swelling, or edema, in the lower extremities may result from fluid retention caused by poor heart function. When the heart can’t pump blood efficiently, fluid can accumulate in the tissues.",
      "key_details": [
      "Swelling is often accompanied by a feeling of heaviness.",
      "Skin may appear shiny or feel tight.",
      "Indentations (pitting edema) may remain when pressed."
      ],
      "note": "Persistent swelling warrants a medical evaluation to rule out heart-related causes."
      },
      {
      "number": 6,
      "title": "Dizziness or Lightheadedness",
      "description": "Frequent dizziness or lightheadedness could be a sign of low blood pressure or poor blood flow due to heart issues. It may also indicate arrhythmias or valve problems.",
      "key_details": [
      "Fainting or near-fainting episodes.",
      "Feeling unsteady, especially when standing up quickly.",
      "Accompanied by blurred vision or nausea."
      ],
      "note": "Dizziness that disrupts your routine should be addressed immediately, as it may signal serious cardiovascular issues."
      },
      {
      "number": 7,
      "title": "Persistent Cough or Wheezing",
      "description": "A persistent cough or wheezing, especially if accompanied by pink or blood-tinged phlegm, can indicate fluid buildup in the lungs due to heart failure.",
      "key_details": [
      "A chronic, dry cough that worsens when lying down.",
      "Wheezing sounds during breathing.",
      "May be accompanied by shortness of breath or fatigue."
      ],
      "note": "This symptom often points to advanced heart conditions and requires prompt medical attention."
      },
      {
      "number": 8,
      "title": "Pain in the Jaw, Neck, or Upper Back",
      "description": "Heart-related pain is not always confined to the chest. Discomfort can radiate to the jaw, neck, or upper back, especially in women. It is often mistaken for musculoskeletal pain but may indicate a heart attack or angina.",
      "key_details": [
      "Pain may feel dull, sharp, or like pressure.",
      "Occurs during physical exertion or stress.",
      "May come and go without an obvious cause."
      ],
      "note": "If pain persists or worsens, seek immediate medical care."
      },
      {
      "number": 9,
      "title": "Cold Sweats",
      "description": "Sudden and unexplained cold sweats can be a warning sign of a heart attack. This symptom may occur without exertion and often accompanies other signs like chest discomfort or nausea.",
      "key_details": [
      "Sweating without a clear reason, such as heat or exercise.",
      "Cold, clammy skin.",
      "Often paired with a feeling of doom or anxiety."
      ],
      "note": "If you experience cold sweats along with other symptoms, it’s crucial to seek medical attention immediately."
      },
      {
      "number": 10,
      "title": "Nausea or Indigestion",
      "description": "While nausea and indigestion are common and often harmless, they can also be subtle signs of heart problems, especially in women. This symptom may accompany a heart attack, with or without chest pain.",
      "key_details": [
      "A feeling of fullness or discomfort in the stomach.",
      "May occur with vomiting or abdominal pain.",
      "Often mistaken for gastrointestinal issues."
      ],
      "note": "If nausea is persistent and occurs with other symptoms, such as dizziness or sweating, don’t ignore it."
      }
      ],
      "importance_of_early_detection": "Early detection of heart problems is critical for effective treatment and prevention of severe outcomes. Many heart-related symptoms overlap with other conditions, making it essential to consult a healthcare professional for proper diagnosis. Using tools like a heart attack risk predictor can provide valuable insights into your cardiovascular health and prompt timely medical intervention.",
      "culmination": "Heart health should never be taken lightly. Recognizing the early warning signs of a heart problem can save your life or the life of someone you love. From chest pain to persistent fatigue and unusual swelling, these symptoms are your body’s way of signaling that something might be wrong. Don’t ignore them. Take proactive steps to maintain heart health, including regular check-ups, a balanced diet, regular exercise, and stress management. If you notice any of the signs discussed above, consult a healthcare professional immediately. Remember, your heart works tirelessly for you—it’s time to return the favor by taking care of it."
      },
      
      
   
   
   
    {
      "id": "2",
      "title": "Heart Health in Your Hands: Simple Daily Habits to Lower Your Risk of a Heart Attack",
      "introduction": "In today’s fast-paced world, maintaining heart health often takes a backseat to the demands of work, family, and social commitments. However, heart disease remains one of the leading causes of death worldwide. The good news? Preventing a heart attack is within your control, thanks to a combination of lifestyle changes and daily habits. By implementing the strategies outlined below, you can take proactive steps to safeguard your heart and enhance your overall well-being.",
      "sections": [
        {
          "title": "1. Prioritize a Balanced Diet",
          "content": [
            "Opt for Whole Foods: Focus on whole grains, fruits, vegetables, lean proteins, and healthy fats. These foods are rich in essential nutrients and antioxidants that reduce inflammation and support heart function.",
            "Limit Processed Foods: Avoid trans fats, excess sodium, and added sugars found in packaged snacks and fast food. These ingredients contribute to high cholesterol and hypertension.",
            "Include Omega-3 Fatty Acids: Foods like salmon, walnuts, and flaxseeds are excellent sources of omega-3 fatty acids, which lower triglyceride levels and reduce the risk of heart disease.",
            "Watch Portion Sizes: Overeating, even healthy foods, can lead to weight gain, a significant risk factor for heart attacks."
          ]
        },
        {
          "title": "2. Stay Physically Active",
          "content": [
            "150 Minutes of Moderate Exercise Weekly: Activities like brisk walking, cycling, or swimming are ideal for maintaining cardiovascular health.",
            "Incorporate Strength Training: Building muscle helps your body burn calories more efficiently, reducing the strain on your heart.",
            "Stay Active Throughout the Day: Take breaks to stand or walk if you have a sedentary job. Simple habits, like taking the stairs or stretching every hour, can make a big difference."
          ]
        },
        {
          "title": "3. Monitor Your Stress Levels",
          "content": [
            "Practice Mindfulness and Meditation: Spending a few minutes daily in mindfulness exercises can lower cortisol levels and promote relaxation.",
            "Engage in Hobbies: Activities like gardening, painting, or reading can act as stress relievers.",
            "Stay Connected: Sharing your feelings with friends or family helps alleviate emotional burdens."
          ]
        },
        {
          "title": "4. Get Quality Sleep",
          "content": [
            "Stick to a Sleep Schedule: Aim for 7-8 hours of quality sleep each night. Going to bed and waking up at the same time daily regulates your body’s internal clock.",
            "Create a Sleep-Friendly Environment: Keep your bedroom dark, quiet, and cool. Avoid screens an hour before bedtime to improve sleep quality.",
            "Address Sleep Disorders: Conditions like sleep apnea can strain your heart. Seek medical advice if you suspect you have a sleep disorder."
          ]
        },
        {
          "title": "5. Quit Smoking and Limit Alcohol Intake",
          "content": [
            "Smoking: Quitting smoking improves heart health within weeks. Explore cessation aids like nicotine patches or counseling for support.",
            "Alcohol: Moderate consumption—one drink per day for women and two for men—may have a protective effect on the heart, but excessive drinking increases risks significantly."
          ]
        },
        {
          "title": "6. Stay Hydrated",
          "content": [
            "Drink Enough Water: Aim for at least 8 glasses of water daily. Adjust this amount based on activity levels and climate.",
            "Limit Sugary Beverages: Replace sodas and energy drinks with herbal teas or infused water for added nutrients."
          ]
        },
        {
          "title": "7. Regular Health Screenings",
          "content": [
            "Blood Pressure: High blood pressure is often called the 'silent killer' because it shows no symptoms. Monitor it regularly.",
            "Cholesterol Levels: High LDL (bad cholesterol) and low HDL (good cholesterol) can increase heart attack risk.",
            "Blood Sugar Levels: Uncontrolled diabetes can damage blood vessels and the heart over time.",
            "Body Mass Index (BMI): Maintaining a healthy weight reduces strain on the heart."
          ]
        },
        {
          "title": "8. Adopt a Positive Mindset",
          "content": [
            "Practice Gratitude: Keeping a gratitude journal can shift your focus from stressors to blessings.",
            "Visualize Success: Visualizing a healthier, active you can motivate lifestyle changes.",
            "Avoid Negative Influences: Surround yourself with supportive people who encourage healthy habits."
          ]
        },
        {
          "title": "9. Limit Sedentary Behavior",
          "content": [
            "Use a Standing Desk: Alternate between sitting and standing while working.",
            "Take Short Walks: Get up every hour for a 5-minute stroll to improve circulation.",
            "Incorporate Active Leisure: Swap screen time for activities like dancing, hiking, or yoga."
          ]
        },
        {
          "title": "10. Educate Yourself and Stay Informed",
          "content": [
            "Learn About Heart Disease: Understanding risk factors and warning signs of a heart attack can prompt early intervention.",
            "Stay Updated on Research: Follow credible health sources for the latest heart health insights.",
            "Engage with Technology: Use wearable devices to track your heart rate, activity levels, and sleep patterns."
          ]
        },
        {
          "title": "11. Practice Portion Control",
          "content": [
            "Use Smaller Plates: This simple trick can help control portions and reduce calorie intake.",
            "Chew Slowly: Eating mindfully allows your brain to register fullness, preventing overeating.",
            "Plan Your Meals: Prepare balanced meals in advance to avoid impulsive, unhealthy choices."
          ]
        },
        {
          "title": "12. Incorporate Relaxation Techniques",
          "content": [
            "Deep Breathing Exercises: Practicing diaphragmatic breathing lowers stress and promotes relaxation.",
            "Progressive Muscle Relaxation: Tensing and releasing muscles can relieve physical and mental stress.",
            "Yoga and Tai Chi: These practices combine movement with mindfulness, benefiting heart health and overall well-being."
          ]
        },
        {
          "title": "13. Understand the Role of Genetics",
          "content": [
            "Know Your Family History: Share your family’s medical history with your doctor to assess risks.",
            "Personalized Plans: Genetic predispositions may require tailored strategies to reduce heart attack risk."
          ]
        },
        {
          "title": "14. Support from Professional Resources",
          "content": [
            "Consult a Dietitian: A registered dietitian can help craft a heart-healthy eating plan.",
            "Visit a Cardiologist: Regular check-ups ensure your heart is in good condition.",
            "Join Support Groups: Connecting with others on a similar journey can provide motivation and accountability."
          ]
        }
      ],
      "conclusion": "Heart health truly is in your hands. By adopting these simple yet powerful daily habits, you can significantly lower your risk of a heart attack and enjoy a healthier, more fulfilling life. Start small, stay consistent, and remember: every positive change you make today brings you one step closer to a heart-healthy tomorrow."
    }
    
  ];

  const blog = blogs.find(blog => blog.id === id);

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p>{blog.introduction}</p>
      {blog.sections && blog.sections.map((section, index) => (
        <div key={index}>
          <h3>{section.title}</h3>
          <ul>
            {section.content.map((contentItem, idx) => <li key={idx}>{contentItem}</li>)}
          </ul>
        </div>
      ))}
      <h3>Conclusion</h3>
      <p>{blog.conclusion}</p>
    </div>
  );
};

export default BlogDetail;
