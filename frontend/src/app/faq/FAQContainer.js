import React from 'react';
import './FAQContainer.css'; // Import the CSS file for styling

const FAQContainer = ({ selectedTab }) => {
  return (
    <div className="container">
      {selectedTab === 'General' && (
        <div className='general'>
          <div className="message-orange">
            <p className="message-content">What is IntelliAgents?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              IntelliAgents is an AI-powered web app designed to help post-secondary students stay organized by automatically extracting key dates from course syllabi and syncing them with Google Calendar.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
          <div className="message-orange">
            <p className="message-content">Who created IntelliAgents?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              IntelliAgents is a student-led project developed as part of the MDIA470 course at UBC in collaboration with Emerging Media Labs. Our team includes Valery, Stuti, Iris, Rithika, Leon, Daffa, and Vivian.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
          <div className="message-orange">
            <p className="message-content">How does IntelliAgents help students?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              IntelliAgents simplifies semester planning by automating the process of tracking deadlines, reducing stress, and ensuring students never miss an important assignment, exam, or project.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
        </div>
      )}
      {selectedTab === 'How It Works' && (
        <div className='how-it-works'>
          <div className="message-orange">
            <p className="message-content">How do I use IntelliAgents?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              Follow these simple steps:
              <br />
              <br />
              Upload Your Syllabus – Submit your syllabus in .doc, .pdf, or .txt format.
              <br />
              AI Extracts Key Dates – IntelliAgents scans your syllabus and identifies deadlines.
              <br />
              Sync with Google Calendar – With one click, all deadlines are added to your calendar.
              <br />
              Stay Organized – Manage your semester effortlessly and reduce last-minute stress.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
          <div className="message-orange">
            <p className="message-content">What file formats does IntelliAgents support?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              IntelliAgents currently supports .doc, .pdf, and .txt file formats for syllabus uploads.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
          <div className="message-orange">
            <p className="message-content">How accurate is the AI at detecting deadlines?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              Our AI is designed to recognize key dates such as assignments, exams, and projects with high accuracy. However, we recommend reviewing the extracted dates for any necessary adjustments.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
        </div>
      )}
      {selectedTab === 'Features & Integration' && (
        <div className='features-integration'>
          <div className="message-orange">
            <p className="message-content">Can I edit or delete deadlines after they’ve been added to my calendar?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              Yes! Once the deadlines are synced with your Google Calendar, you can manually edit or remove them as needed.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
          <div className="message-orange">
            <p className="message-content">Do I need a Google account to use IntelliAgents?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              Yes, a Google account is required for syncing deadlines with Google Calendar.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
          <div className="message-orange">
            <p className="message-content">Is IntelliAgents compatible with other calendar apps?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              At the moment, IntelliAgents is optimized for Google Calendar, but future updates may include support for other platforms.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
        </div>
      )}
      {selectedTab === 'Privacy & Security' && (
        <div className='privacy-security'>
          <div className="message-orange">
            <p className="message-content">Is my syllabus data stored on IntelliAgents?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              IntelliAgents processes your syllabus securely and does not permanently store your files after extracting key dates.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
          <div className="message-orange">
            <p className="message-content">Is my Google Calendar data safe?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              Yes! IntelliAgents only adds deadlines to your Google Calendar with your permission. We do not access or modify any other data.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
        </div>
      )}
      {selectedTab === 'Support & Feedback' && (
        <div className='support-feedback'>
          <div className="message-orange">
            <p className="message-content">What if I encounter an issue while using IntelliAgents?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              If you experience any issues, please reach out to us through our contact form. We’re happy to assist!
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
          <div className="message-orange">
            <p className="message-content">Can I suggest new features for IntelliAgents?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              Absolutely! We’d love to hear your ideas. You can send your suggestions through our contact page.
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
          <div className="message-orange">
            <p className="message-content">How can I get in touch with the IntelliAgents team?</p>
            <div className="message-timestamp-right">SMS 13:37</div>
          </div>
          <div className="message-blue">
            <p className="message-content">
              You can reach us via the contact form on our website. Whether you have feedback, questions, or just want to share how IntelliAgents has helped you, we’d love to hear from you!
            </p>
            <div className="message-timestamp-left">SMS 13:37</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQContainer;