import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const location = useLocation();
  const formRef = useRef();
  const [status, setStatus] = useState('');

  // Animation Observer
  useEffect(() => {
    const section = document.querySelector('.contact-container');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-contact');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  // Scroll to section
  useEffect(() => {
    if (location.pathname === '/contact') {
      const section = document.getElementById('contact');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'service_s516s5d',
        'template_onenkyk',
        formRef.current,
        'kCBDQSaLjahLpHb4B'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus(''), 4000); 
        },
        (error) => {
          console.error(error.text);
          setStatus('error');
          setTimeout(() => setStatus(''), 4000); 
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-subtitle">I'd love to hear from you. Let's build something great together!</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p><strong>Email:</strong>  thevrnexus01@email.com</p>
          <p><strong>Location:</strong> Dharamshala, Himachal Pradesh</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vishal-kumar-a1228a36b/" target="_blank" rel="noreferrer">linkedin.com/vishal-kumar</a></p>
        </div>

        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="contact-btn">Send Message</button>

          {status && (
            <div className={`status-box ${status}`}>
              <span className="checkmark">
                {status === 'success' && '✔'}
                {status === 'error' && '⚠'}
                {status === 'sending' && '⏳'}
              </span>
              <p>
                {status === 'sending' && 'Sending...'}
                {status === 'success' && 'Message sent successfully!'}
                {status === 'error' && 'Failed to send message. Please try again.'}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
