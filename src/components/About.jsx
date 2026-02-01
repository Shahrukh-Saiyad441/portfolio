import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            I am an exceptionally creative individual with a Master's in Computer Science, 
            and a Full Stack Developer, seeking internship or professional experience in software design. 
            Passionate about developing innovative solutions and gaining hands-on experience in 
            full-stack software development.
          </p>
          <p className="about-description">
            Currently seeking the role of Software Engineer at a growth-oriented company 
            where I can apply my knowledge of software designing and development to meet 
            clients' specifications while continuing to expand my professional expertise.
          </p>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">Jersey City, 07306</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">saiyadshahrukh4441@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">+1 9296187422</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Languages:</span>
              <span className="detail-value">English, Hindi, Gujarati, Urdu</span>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="about-card">
            <div className="card-icon">💻</div>
            <h3>Software Development</h3>
            <p>Building full-stack applications with modern technologies</p>
          </div>
          <div className="about-card">
            <div className="card-icon">🎨</div>
            <h3>Creative Problem Solving</h3>
            <p>Approaching challenges with innovative solutions</p>
          </div>
          <div className="about-card">
            <div className="card-icon">🚀</div>
            <h3>Continuous Learning</h3>
            <p>Always exploring new technologies and best practices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
