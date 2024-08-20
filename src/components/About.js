import React from 'react';
import "./About.css";

const About = () => {
    return (
        <section id='about'>
            <div className='about-content'>
                <img
                    className="snowboard"
                    src={`${process.env.PUBLIC_URL}/snowboard.jpg`}
                    alt="snowboarding"
                />
                <div className='text-content'>
                    <h2>About me</h2>
                    <div className='line'></div>
                    <p>
                        I'm a senior studying Computer Science at Hunter College. Outside of my studies, I enjoy snowboarding, playing volleyball, as well as body building.
                        I am a Software Engineering Fellow at Headstarter and a Software Engineering Intern at I.T. Services LLC working on integrating A.I. into our application.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
