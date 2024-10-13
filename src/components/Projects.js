import React from 'react';
import './Projects.css';

const projects = [
    {
        title: "Rate My Professor scraper",
        tech: "React.js, Next.js, TailwindCSS",
        description: "A web scraper that automatically extracts data from Rate my Professor and upsert to a Pinecone index, integrated with a RAG pipeline using OpenAI 4o to get up-to-date and releveant answers to user queries.",
        links: [
            { href: "https://github.com/ShohruzE/rmp-rag", label: "GitHub" }
        ]
    },
    {
        title: "Honeycomb",
        tech: "Node.js, Clerk, Stripe, Firebase, TailwindCSS",
        description:"A SaaS product generating dynamic flashcards using OpenAI 4o, with integrated Stripe-based paywall and pricing plans, in collaboration with 2 Headstarter fellows.",
        links: [
            { href: "https://github.com/ShohruzE/ai-flashcards", label: "GitHub" }
        ]
    },
    {
        title: "Zoom API app",
        tech: "React.js, MUI, Node.js, Express.js",
        description: "A  full-stack meeting management app using the Zoom API for scheduling, attendee management, and automated notifications.",
        links: [
            { href: "https://github.com/darren-moy/stemkasaFrontandBack/tree/main", label: "GitHub" },
        ]
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <br></br>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p className="tech">{project.tech}</p>
                        <p>{project.description}</p>
                        <div className="links">
                            {project.links.map((link, i) => (
                                <a href={link.href} key={i} target="_blank" rel="noopener noreferrer" className="project-link">{link.label}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
