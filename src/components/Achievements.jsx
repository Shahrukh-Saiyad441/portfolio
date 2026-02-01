import { FaTrophy, FaCertificate, FaAward } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      type: "Professional Development",
      title: "Commonwealth Bank Introduction to Data Science Job Simulation",
      organization: "Forage",
      date: "September 2024",
      icon: <FaCertificate />,
      details: [
        "Completed a job simulation involving Data Management skills for Commonwealth Bank's Data Science team",
        "Demonstrated proficiency in creating data engineering pipelines to aggregate and extract valuable insights from datasets",
        "Optimized data-driven decision-making processes",
        "Acquired skills in anonymizing personal data within datasets, ensuring compliance with data privacy regulations",
        "Proposed effective data analysis approaches, particularly related to social media",
        "Demonstrated ability to design well-structured databases for efficient information management"
      ],
      gradient: "gradient-1"
    },
    {
      type: "Award",
      title: "Design Engineering I - Winner",
      organization: "Saffrony Institute Of Technology",
      date: "Feb 2020 - Jun 2020",
      icon: <FaTrophy />,
      details: [
        "Won the Design Engineering I competition",
        "Demonstrated excellence in engineering design and problem-solving"
      ],
      gradient: "gradient-2"
    },
    {
      type: "Award",
      title: "FollineBoat-2k22 - Winner",
      organization: "Saffrony Institute Of Technology",
      date: "Mar 2021",
      icon: <FaAward />,
      details: [
        "Won the FollineBoat-2k22 competition",
        "Showcased technical skills and innovation"
      ],
      gradient: "gradient-3"
    },
    {
      type: "Certificate",
      title: "Professional & Life Skills Development",
      organization: "Specialized Course",
      date: "Dec 2020 - Dec 2023",
      icon: <FaCertificate />,
      details: [
        "A specialized course intended to inculcate an integrated personal Life Skill to the student",
        "Focus on professional and personal development"
      ],
      gradient: "gradient-4"
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">Achievements & Awards</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className={`achievement-card ${achievement.gradient}`}>
            <div className="achievement-icon">
              {achievement.icon}
            </div>
            <div className="achievement-type">{achievement.type}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <div className="achievement-meta">
              <span className="achievement-org">{achievement.organization}</span>
              <span className="achievement-date">{achievement.date}</span>
            </div>
            <ul className="achievement-details">
              {achievement.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

