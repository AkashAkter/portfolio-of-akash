import React from "react";
import "./About.css";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    FadeOut,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    StickyOut,
    Zoom,
    ZoomIn,
    ZoomOut,
} from "react-scroll-motion";


const About = () => {
    return (
        <div className="about__container">
            <div className="about">
                <h1>About Me</h1>
            </div>
            <div className="description">
                <p className="text-center">
                    Full-stack developer who cares deeply about user experience.{" "}
                    <br />
                    Serious passion for learning new technologies and take new challenge.
                </p>
            </div>
        </div>
    );
};

export default About;
