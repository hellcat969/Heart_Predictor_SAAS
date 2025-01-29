// src/PrivacyPolicy.js
import React from 'react';
import './privacypolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy </h1>
      {/* <p><strong>Effective Date:</strong> 22-01-1025</p> */}
      <p>
        Welcome to the Heart Attack Risk Predictor. Your privacy is critically
        important to us. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you use our Website. By
        accessing or using the Website, you agree to the terms of this Privacy
        Policy.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> Information you provide
          directly, such as your name, email address, and any other details
          required for creating an account or contacting us.
        </li>
        <li>
          <strong>Health Data:</strong> Information you input for risk
          prediction, such as age, weight, medical history, and other
          health-related parameters. This data is used solely for the purpose
          of providing you with accurate risk predictions.
        </li>
        <li>
          <strong>Usage Data:</strong> Automatically collected information,
          such as IP addresses, browser types, and device identifiers, to
          improve our Website’s functionality and user experience.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Provide accurate and reliable heart attack risk predictions.</li>
        <li>Improve and personalize the Website’s functionality.</li>
        <li>Communicate with you regarding updates, services, or technical issues.</li>
        <li>Ensure compliance with legal and regulatory requirements.</li>
      </ul>

      <h2>3. Data Security</h2>
      <p>
        We implement advanced security measures to protect your information, including:
      </p>
      <ul>
        <li>Data encryption using industry-standard protocols.</li>
        <li>Regular security audits to identify and mitigate risks.</li>
        <li>
          Restricted access to your data, limited to authorized personnel only.
        </li>
      </ul>
      <p>Your data is anonymized and securely stored to prevent unauthorized access.</p>

      <h2>4. Sharing of Information</h2>
      <p>
        We do not sell, rent, or share your personal or health data with third
        parties, except in the following cases:
      </p>
      <ul>
        <li>
          <strong>With Your Consent:</strong> If you explicitly agree to share
          your data with third parties.
        </li>
        <li>
          <strong>Legal Compliance:</strong> If required to comply with laws,
          regulations, or legal processes.
        </li>
        <li>
          <strong>Service Providers:</strong> To trusted partners who assist
          in operating the Website and have agreed to maintain confidentiality.
        </li>
      </ul>

      <h2>5. User Rights</h2>
      <p>You have the following rights regarding your information:</p>
      <ul>
        <li>Access your data and request a copy.</li>
        <li>Correct inaccuracies in your personal or health data.</li>
        <li>Request deletion of your data, subject to legal obligations.</li>
        <li>Withdraw consent for data processing at any time.</li>
      </ul>
      <p>To exercise these rights, contact us at [Insert Contact Email].</p>

      <h2>6. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies to enhance your user experience. Cookies help us
        understand how you interact with our Website and enable features such
        as personalized predictions. You can manage or disable cookies through
        your browser settings.
      </p>

      <h2>7. Compliance with Regulations</h2>
      <p>Our Website complies with global standards, including:</p>
      <ul>
        <li>HIPAA: Ensuring the protection of health information.</li>
        <li>
          GDPR: Guaranteeing data privacy and user rights for European users.
        </li>
        <li>
          CCPA: Protecting user data for California residents.
        </li>
      </ul>

      <h2>8. Superior Features</h2>
      <p>What makes our Website stand out:</p>
      <ul>
        <li>AI-Powered Accuracy: Our advanced machine learning model ensures precise risk predictions.</li>
        <li>User Anonymity: Your health data is anonymized immediately upon submission.</li>
        <li>End-to-End Encryption: All data transfers are encrypted.</li>
        <li>
          Educational Insights: Along with risk predictions, we provide
          actionable insights and preventative health tips tailored to your
          profile.
        </li>
      </ul>

      <h2>9. Children’s Privacy</h2>
      <p>
        Our Website is not intended for use by individuals under the age of 18.
        We do not knowingly collect personal information from children. If you
        believe your child has provided us with personal data, please contact
        us immediately.
      </p>

      <h2>10. Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be reflected with an updated "Effective Date." Continued use of the
        Website constitutes acceptance of the updated terms.
      </p>

    </div>
  );
};

export default PrivacyPolicy;
