import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "FinStream",
      period: "2024 - Present",
      description: "Real-time Financial Monitoring & Risk Management Platform that integrates livestock price feeds, fraud detection, and risk forecasting into a single, scalable platform for traders, financial institutions, and compliance teams.",
      technologies: ["Java", "Quarkus", "Apache Kafka", "PostgreSQL", "AWS", "WebSockets", "React.js"],
      highlights: [
        "Built event-driven, high-throughput streaming architecture for real-time financial data processing",
        "Implemented fraud detection and risk forecasting capabilities",
        "Designed scalable backend services using Java/Quarkus framework",
        "Integrated Apache Kafka for real-time data streaming and event processing",
        "Deployed on AWS cloud infrastructure for scalability and reliability",
        "Planned React.js frontend for user interface"
      ]
    },
    {
      title: "Presentation Administrating Tool",
      period: "November 2021 - May 2022",
      description: "Python-based application that enhances presentation experience by allowing users to control slides using hand gestures. Provides hands-free slide control with accurate hand tracking using computer vision techniques.",
      technologies: ["Python", "OpenCV", "Mediapipe", "PyAutoGUI"],
      highlights: [
        "Developed hands-free slide control using hand gesture recognition",
        "Implemented real-time hand tracking using OpenCV and Mediapipe",
        "Created accurate gesture recognition system for smooth slide transitions",
        "Integrated PyAutoGUI to simulate keyboard/mouse actions for presentation control",
        "Supports popular presentation software with intuitive gesture-based navigation"
      ]
    },
    {
      title: "PostgreSQL Transaction Management System",
      period: "2023",
      description: "Java-based application implementing comprehensive transaction management in PostgreSQL, ensuring data integrity and consistency through proper ACID properties and transaction control mechanisms.",
      technologies: ["Java", "PostgreSQL", "JDBC", "Gradle"],
      highlights: [
        "Implemented robust transaction management ensuring data integrity and consistency",
        "Developed using Java with JDBC for database connectivity",
        "Utilized Gradle build tool for project management and dependencies",
        "Designed transaction control mechanisms following ACID principles",
        "Created comprehensive error handling and rollback strategies"
      ]
    },
    {
      title: "Ordelo | Full-Stack System Development",
      period: "February 2025 - May 2025",
      description: "Developed a full-stack application that allows users to search recipes, generate ingredient lists, and add items to a cart for ordering from selected stores.",
      technologies: ["Go", "React", "JavaScript", "MongoDB", "Redis", "Docker", "Linux"],
      highlights: [
        "Designed and implemented 10+ backend APIs in Go using object-oriented principles",
        "Integrated MongoDB for persistent storage and Redis caching to optimize performance",
        "Reduced response latency by 30% through caching strategies",
        "Built responsive frontend components using React and JavaScript",
        "Deployed and tested in a Linux-based Docker environment"
      ]
    },
    {
      title: "Xero Application Testing",
      period: "February 2025 - May 2025",
      description: "Executed comprehensive testing for Xero application, ensuring quality and reliability through systematic test case execution and defect management.",
      technologies: ["Testing", "Jira", "Documentation", "Test Planning"],
      highlights: [
        "Executed 50+ functional and integration test cases",
        "Documented defects with clear reproduction steps",
        "Built traceability matrices and test summary reports covering 100% of critical scenarios",
        "Collaborated with developers during peer reviews to resolve defects"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-period">{project.period}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <ul className="project-highlights">
              {project.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

