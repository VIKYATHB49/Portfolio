import React from 'react';
import '../assets/styles/Resume.scss';
import resumePDF from '../assets/docs/Vikyath_Java_Full_Stack.pdf';

const Resume = () => {
  return (
    <div className="resume">
      {/* Section Heading */}
      <h1 className="section-title">Resume</h1>

      {/* Description Paragraph */}
      <div className="resume-description">
        <p>
          This resume is a perfect match for roles such as <strong>Software Developer</strong> and <strong>Java Full Stack Developer</strong>.
        </p>
        <p>
          It scored <strong>90+ ATS</strong> on top platforms like <strong>Resume Worded</strong> and <strong>Naukri</strong>, making it highly optimized for Applicant Tracking Systems.
        </p>
      </div>

      {/* Embedded PDF Viewer */}
      <iframe src={resumePDF} title="Resume" className="resume-pdf" />

      {/* Download Button */}
      <div className="download-btn-wrapper">
        <a href={resumePDF} download className="download-btn">Download CV</a>
      </div>
    </div>
  );
};

export default Resume;
