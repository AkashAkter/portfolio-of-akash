import React from "react";
import "./Hero.css";
import resume from "../../../assets/Akash Akter's Resume.pdf";

const Hero = () => {
    return (
        <div className="home__container">
            <div className="name">
                <h1>Md Akash Akter</h1>
            </div>
            <div className="designation">
                <p>Junior Full-Stack Developer</p>
            </div>
            <div className="lg:space-x-5 space-x-0 flex justify-center items-center flex-col lg:flex-row space-y-5 lg:space-y-0">
                <button className="neon__btn">
                    <a href={resume} Value="download">
                        Download Resume
                    </a>
                </button>
                <button className="neon__btn">
                    <a href="mailto: akash.akter08@gmail.com">Send Mail</a>
                </button>
            </div>
        </div>
    );
};

export default Hero;
