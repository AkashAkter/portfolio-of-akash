import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Form from "./Form/Form";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Form />
            <Contact />
        </div>
    );
};

export default Home;
