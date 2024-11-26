import React from "react";
import "@/app/styles/skills.css";

const Skills = () => {
  const skills = [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Node.js",
    "Adobe Photoshop",
    "Microsoft-Office"
  ];

  return (
    <div id="skills" className="skills-container">
      <div className="skills-box">
        <h2 className="skills-heading">Technologies I&apos;m proficient in:</h2>
        <p className="skills-text">
          I have a solid foundation in web development, &quot;specializing in HTML&quot; &quot;CSS&quot; &quot;TypeScript&quot; and &quot;Next.js&quot;. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I&apos;m also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skills and contribute effectively.
        </p>
        <div className="skills-icons-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skills-space">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
