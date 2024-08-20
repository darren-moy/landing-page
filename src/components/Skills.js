import React from 'react';
import "./Skills.css";

const Skills = () => {
    const skills = {
        Frontend: ["Next.js", "React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
        Backend: ["Node.js", "Express.js", "Python", "Java", "C++"],
        Tools: ["Git", "GitHub", "Visual Studio Code"],
    };

    return (
        <section id='skills'>
            <h2>Skills</h2>
            <div className='line'></div>
            <div className='skills-container'>
                {Object.keys(skills).map((category) => (
                    <React.Fragment key={category}>
                        <h3>{category}</h3>
                        <div className='skills-list'>
                            {skills[category].map((skill) => (
                                <div key={skill} className='skill-item'>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default Skills;
