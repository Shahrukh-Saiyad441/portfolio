import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Go", "JavaScript", "SQL", "C", "C++", "Java", "HTML", "CSS", "PHP"],
      gradient: "gradient-1"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "scikit-learn", "TensorFlow", "Pandas", "NumPy", "OpenCV", "Bootstrap"],
      gradient: "gradient-2"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
      gradient: "gradient-3"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Postman", "Jupyter", "VS Code", "qTest", "Jira", "Linux", "RESTful APIs", "JWT Auth", "Redis", "AJAX", "JSON", "Microsoft Office"],
      gradient: "gradient-4"
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className={`category-title ${category.gradient}`}>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="skills-extra">
        <div className="extra-category">
          <h3>Soft Skills</h3>
          <div className="soft-skills">
            <span>Time Management</span>
            <span>Adaptability</span>
            <span>Creativity</span>
            <span>Work Ethics</span>
            <span>Problem Solving</span>
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Attention to Detail</span>
            <span>Critical Thinking</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

