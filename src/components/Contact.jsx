import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-intro">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology. Feel free to reach out!
          </p>
          <div className="contact-details">
            <a href="mailto:saiyadshahrukh4441@gmail.com" className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <span className="contact-value">saiyadshahrukh4441@gmail.com</span>
              </div>
            </a>
            <a href="tel:+19296187422" className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-text">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+1 9296187422</span>
              </div>
            </a>
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <span className="contact-label">Location</span>
                <span className="contact-value">Jersey City, 07306</span>
              </div>
            </div>
          </div>
          <div className="social-links">
            <a 
              href="https://github.com/Shahrukh-Saiyad441" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/saiyad-shahrukh-9169a820b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="contact-visual">
          <div className="contact-card">
            <div className="card-glow"></div>
            <h3>Let's Connect!</h3>
            <p>I'm currently looking for internship opportunities and open to collaborations.</p>
            <div className="interests">
              <h4>Interests</h4>
              <div className="interest-tags">
                <span>Game Development</span>
                <span>Beta Testing</span>
                <span>AR/VR</span>
                <span>Cricket</span>
                <span>Snooker</span>
                <span>Chess</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Shahrukh Saiyad. All rights reserved.</p>
        <p>Built with React and ❤️</p>
      </div>
    </section>
  );
};

export default Contact;

