import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const PrivacyPolicyPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <h1>Privacy Policy</h1>
    <h2>Overview</h2>
    <p>We are committed to protecting the privacy and accuracy of confidential information to the extent possible, subject to provisions of state and federal law. Other than as required by laws that guarantee public access to certain types of information, or in response to subpoenas or other legal instruments that authorize access, personally-identifiable information is not actively shared. In particular, we do not re-distribute or sell personal information collected on our web servers.</p>
    <h2>Use of Cookies for Analytics</h2>
    <p>Our website uses a third-party analytics provider (Google Analytics) to help us understand how visitors use our site. We use this information to improve our content and your experience visiting our site. Google Analytics relies on cookies to produce this information.</p>
    <h2>Data Deletion</h2>
    <p>
      As per Facebook policy, we have to provide User Data Deletion Callback URL or Data Deletion Instructions URL.

      If you want to delete your activities, you can remove your information by following these steps:

      <ol>
        <li>Go to your Facebook Account's Setting & Privacy. Click Settings.</li>
        <li>Click Security and login.</li>
        <li>Look for Apps and Websites and you will see all of the apps and websites you linked with your Facebook.</li>
        <li>Look for Sarah Bentley Art.</li>
        <li>Scroll and click Remove.</li>
        <li>Congratulations, you have successfully removed your app activities.</li>
      </ol>
    </p>
  </Layout>
);

export default PrivacyPolicyPage;
