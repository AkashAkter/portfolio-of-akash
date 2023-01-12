import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;
