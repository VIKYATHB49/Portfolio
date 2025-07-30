import React, { useState } from 'react';
import '../assets/styles/About.scss';
import teachnookBadge from '../assets/images/teachnook.jpg';
import convocationImage from '../assets/images/anurag.jpg';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava,
  FaPython, FaDatabase, FaDocker, FaBootstrap, FaFigma, FaAws
} from 'react-icons/fa';
import {
  SiSpring, SiSpringboot, SiHibernate, SiGit, SiGithub,
  SiOracle, SiMysql
} from 'react-icons/si';

// Experience and Education Data
const experiences = [
  {
    title: 'UI/UX Designer Intern',
    organization: 'Zidio Development',
    dates: 'May 2025 – Present',
    description: (
      <>
        <p>• Collaborated with a team of six to design a feature-rich Learning Portal that offers 10+ courses and integrated internship opportunities.</p>
        <p>• Designed and implemented a Game-based Learning platform with core features such as live/offline access, 1:1 mentorship, and a course rating and review system.</p>
      </>
    ),
    image: null
  },
  {
    title: 'Web Development Intern',
    organization: 'Teachnook',
    dates: 'Sep 2024 – Nov 2024',
    description: (
      <>
        <p>• Acquired full-stack development skills through intensive hands-on training at Teachnook, ranked among LinkedIn’s Top 10 Startups of 2023.</p>
        <p>• Developed a real-time Weather App using geolocation APIs to fetch location-specific forecasts. Achieved 90% accuracy in displaying 5-day weather predictions with optimized data handling.</p>
      </>
    ),
    image: teachnookBadge
  }
];

const educations = [
  {
    institution: 'Anurag University',
    degree: 'B.Tech in Computer Science',
    dates: 'Oct 2021 – May 2025',
    location: 'Hyderabad, Telangana',
    extra: 'CGPA: 8.68',
    image: convocationImage
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Intermediate MPC',
    dates: '2019 – 2021',
    location: 'Raviryala, Hyderabad',
    extra: 'Marks: 968',
    image: null
  }
];

// Skills by category
const skillColumns = [
  {
    header: 'Frontend',
    skills: [
      { icon: <FaHtml5 />, name: 'HTML5' },
      { icon: <FaCss3Alt />, name: 'CSS3' },
      { icon: <FaJs />, name: 'JavaScript' },
      { icon: <FaReact />, name: 'React.js' },
      { icon: <FaBootstrap />, name: 'Bootstrap' }
    ]
  },
  {
    header: 'Backend',
    skills: [
      { icon: <FaNodeJs />, name: 'Node.js' },
      { icon: <FaJava />, name: 'Java' },
      { icon: <FaPython />, name: 'Python' }
    ]
  },
  {
    header: 'Database',
    skills: [
      { icon: <FaDatabase />, name: 'DynamoDB' },
      { icon: <SiOracle />, name: 'Oracle' },
      { icon: <SiMysql />, name: 'MySQL' }
    ]
  },
  {
    header: 'Frameworks & Tools',
    skills: [
      { icon: <SiSpring />, name: 'Spring' },
      { icon: <SiSpringboot />, name: 'Spring Boot' },
      { icon: <SiHibernate />, name: 'Hibernate' },
      { icon: <FaDocker />, name: 'Docker' },
      { icon: <FaAws />, name: 'AWS' },
      { icon: <SiGit />, name: 'Git' },
      { icon: <SiGithub />, name: 'GitHub' },
      { icon: <FaFigma />, name: 'Figma' }
    ]
  }
];

const About = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="about">
      {/* Image Modal */}
      {modalImage && (
        <div className="image-modal-overlay">
          <div className="image-modal">
            <button className="close-btn" onClick={() => setModalImage(null)}>×</button>
            <img src={modalImage} alt="Enlarged view" />
          </div>
        </div>
      )}

      {/* Experience Section */}
      <section className="section experience">
        <h1 className="section-title">Experience</h1>
        <div className="roadmap">
          {experiences.map((exp, idx) => (
            <div className="roadmap-item" key={idx}>
              <div className="roadmap-point" />
              <div className="roadmap-content">
                <h2>{exp.title}<br /><span>{exp.organization}</span></h2>
                <p className="dates">{exp.dates}</p>
                <div className="description">{exp.description}</div>
                {exp.image && (
                  <aside className="badge">
                    <img
                      src={exp.image}
                      alt={exp.organization}
                      onClick={() => setModalImage(exp.image)}
                    />
                  </aside>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section education">
        <h1 className="section-title">Education</h1>
        <div className="roadmap single">
          {educations.map((edu, idx) => (
            <div className="roadmap-item" key={idx}>
              <div className="roadmap-point" />
              <div className="roadmap-content">
                <h2>{edu.institution}</h2>
                <p className="dates">{edu.dates}</p>
                <p>{edu.degree} | {edu.location}</p>
                <p>{edu.extra}</p>
                {edu.image && (
                  <aside className="convocation">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      onClick={() => setModalImage(edu.image)}
                    />
                  </aside>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills">
        <h1 className="section-title">My Skillset</h1>
        <div className="skills-grid four-columns">
          {skillColumns.map((col, idx) => (
            <div className="skill-column" key={idx}>
              <h3>{col.header}</h3>
              <div className="skill-list">
                {col.skills.map((skill, id) => (
                  <div className="skill-item" key={id}>
                    <div className="icon-wrapper">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
