import React from 'react';
import './Profile.css'

const Profile = () =>{
    return (
        <section id='profile'>
            <div className='profile-details'>
                <h2>Darren Moy</h2>
                <div className='button-container'>
                    <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download="Darren_Moy_Resume.pdf">
                        <button className='download-button'>Resume download</button>
                    </a>
                    <a href='https://www.linkedin.com/in/darren-moy-a3a323210/' target='blank' rel=''>
                        <img
                        className="linkedin-button"
                        src={`${process.env.PUBLIC_URL}/LinkedIn.png`} 
                        alt="LinkedIn Profile"
                        />
                    </a>
                    <a href='https://github.com/darren-moy' target='blank' rel=''>
                        <img
                        className="linkedin-button"
                        src={`${process.env.PUBLIC_URL}/github-color.svg`} 
                        alt="LinkedIn Profile"
                        />
                    </a>
                </div>
            </div>
            <img id="pictureofme" src={`${process.env.PUBLIC_URL}/IMG_5475.jpg`} alt="Darren Moy" />
        </section>
    );
}

export default Profile;
