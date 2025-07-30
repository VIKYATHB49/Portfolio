import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/styles/Contact.scss';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();

    // Validation
    if (name.length < 4) {
      setStatus('Name must be at least 4 characters.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('Enter a valid email address.');
      return;
    }

    setStatus('Sending...');

    emailjs.sendForm('service_ooldhqa', 'template_9pc4iiy', form.current, 'MHhg-F14dCdb-s3Zn')
      .then(() => {
        return emailjs.sendForm('service_ooldhqa', 'template_51ivpd9', form.current, 'MHhg-F14dCdb-s3Zn');
      })
      .then(() => {
        setShowPopup(true);
        setStatus('');
        form.current.reset();

        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      })
      .catch((error) => {
        setStatus('Something went wrong. Try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <div className="contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="sub-text">
        Feel free to contact me. I’ll reply within 24 hours or you can reach me on social platforms below.
      </p>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>

      {status && <div className="status-message">{status}</div>}
      {showPopup && <div className="popup-message">✅ Message sent successfully!</div>}

      <div className="social-icons">
        <a href="https://github.com/VIKYATHB49" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/vikyath49" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://x.com/sama_vikyath" target="_blank" rel="noreferrer"><FaXTwitter /></a>
        <a href="https://instagram.com/vikyath_reddy_sama" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default Contact;
