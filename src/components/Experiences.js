import React from 'react';
import "./Experiences.css";

const Experiences = () => {
    const experiences = [
        {
            title: "Software Engineering Fellow",
            company: "Headstarter",
            description: "July 2024 - Present",
            imgSrc: `${process.env.PUBLIC_URL}/headstarter.webp`,
            link: "https://headstarter.co/",
        },
        {
            title: "Software Engineering Intern",
            company: "I.T. Services LLC",
            description: "July 2024 - Present",
            imgSrc: `${process.env.PUBLIC_URL}/stemkasa.png`,
            link: "http://www.renafrique.com/LandingPage/",
        },
    ];

    return (
        <section id='experience'>
            <h2>Experience</h2>
            <div className='line'></div>
            <div className='experiences-container'>
                {experiences.map((exp, index) => (
                    <div key={index} className='experience-item'>
                        <div className='text-content'>
                            <h3>{exp.title}</h3>
                            <h4>{exp.company}</h4>
                            <p>{exp.description}</p>
                        </div>
                        <a href={exp.link} target="_blank" rel="noopener noreferrer">
                            <img
                                className="experience-img"
                                src={exp.imgSrc}
                                alt={exp.title}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experiences;
