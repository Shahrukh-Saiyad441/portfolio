import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Pace University, Seidenberg School of Computer Science and Information Systems",
      location: "New York City, New York",
      period: "December 2025",
      gpa: "3.97/4",
      concentration: "Computer Science",
      honors: "CS",
      type: "masters"
    },
    {
      degree: "Bachelor of Computer Engineering",
      institution: "S P B Patel Engineering College",
      location: "Gujarat, India",
      period: "June 2019 - June 2023",
      cgpa: "7.63/10",
      cpi: "7.82/10",
      type: "bachelors"
    }
  ];

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="timeline-marker"></div>
            <div className="education-card">
              <div className="education-header">
                <FaGraduationCap className="education-icon" />
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                </div>
              </div>
              <div className="education-details">
                <div className="education-detail">
                  <FaMapMarkerAlt />
                  <span>{edu.location}</span>
                </div>
                <div className="education-detail">
                  <FaCalendarAlt />
                  <span>{edu.period}</span>
                </div>
                {edu.gpa && (
                  <div className="education-detail highlight">
                    <FaStar />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                )}
                {edu.cgpa && (
                  <div className="education-detail highlight">
                    <FaStar />
                    <span>CGPA: {edu.cgpa} | CPI: {edu.cpi}</span>
                  </div>
                )}
                {edu.percentage && (
                  <div className="education-detail highlight">
                    <FaStar />
                    <span>Percentage: {edu.percentage}</span>
                  </div>
                )}
                {edu.percentile && (
                  <div className="education-detail highlight">
                    <FaStar />
                    <span>Percentile: {edu.percentile}</span>
                  </div>
                )}
                {edu.concentration && (
                  <div className="education-detail">
                    <span>Concentration: {edu.concentration}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

