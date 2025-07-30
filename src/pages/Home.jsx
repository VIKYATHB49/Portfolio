import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import '../assets/styles/Home.scss';
import HomeImage from '../assets/images/Home.png';
import ProfileImage from '../assets/images/Profile.jpg';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="left-side">
          <h2>Hello, I'm</h2>
          <h1 className="main-name">Sama Vikyath Reddy</h1>

          {/* Typewriter Effect */}
          <div className="typewriter">
            <Typewriter
              options={{
                strings: [
                  'Java Full Stack Developer',
                  'Spring Boot & React.js Enthusiast',
                  'UI/UX Designer',
                  'Tech Explorer & Problem Solver'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="hero-description">
            Passionate about building performant full-stack applications and designing user-centric digital experiences. 
            Skilled in Java, Spring Boot, React.js, Docker, and UI/UX tools like Figma & Adobe XD.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://linkedin.com/in/vikyath49" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/VIKYATHB49" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://x.com/sama_vikyath" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com/vikyath_reddy_sama" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="right-side">
          <img src={HomeImage} alt="Sama Vikyath Reddy" className="profile-image" />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>Let Me Introduce Myself</h2>
        <div className="about-content">
          <div className="about-left">
            <p>
              I'm <strong>Sama Vikyath Reddy</strong>, a dedicated Java Full Stack Developer and UI/UX Designer from Telangana, India. 
              I specialize in building scalable web applications using Spring Boot, React.js, and modern development tools like Docker.
            </p>

            <p>
              My passion for coding is matched by my love for design — I enjoy crafting seamless digital experiences that are both functional and user-friendly.
              Whether it's backend architecture or frontend interaction, I bring creativity and precision to every project.
            </p>

            <p>
              I come from a supportive family that values education and self-growth. 
              Outside of tech, I enjoy playing football, exploring design trends, and participating in hackathons and creative challenges.
            </p>

            <p>
              I'm always eager to learn, collaborate, and contribute to innovative tech solutions that make a meaningful impact.
              If you're building something exciting, I'd love to be part of it.
            </p>
          </div>

          <div className="about-right">
            <img src={ProfileImage} alt="About Vikyath" className="about-image" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
