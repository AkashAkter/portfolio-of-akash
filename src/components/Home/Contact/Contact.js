import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact__container">
            <h1 className="text-4xl lg:text-7xl">Contact Me</h1>
            <div className="contact">
                <h4 className="text-xl lg:text-3xl mb-5">Contact Info</h4>
                <div className="contact__info">
                    <h1 className="fas fa-envelope">
                        &nbsp; akash.akter08@gmail.com
                    </h1>
                    <h1 className="fas fa-phone"> &nbsp;+880 1839 277706</h1>
                    <h1 className="fas fa-map-marker-alt">
                        {" "}
                        &nbsp;Bogura, Bangladesh
                    </h1>
                </div>
            </div>
            <div className="logo ">
                <a
                    className="hover:text-[#171515]"
                    target="_blank"
                    href="https://github.com/AkashAkter"
                    rel="noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a
                    className="hover:text-[#171515]"
                    target="_blank"
                    href="https://www.linkedin.com/in/akash08akter/"
                    rel="noreferrer"
                >
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                    className="hover:text-[#171515]"
                    target="_blank"
                    href="https://www.facebook.com/akashh.akter"
                    rel="noreferrer"
                >
                    <i class="fab fa-facebook"></i>
                </a>
            </div>
        </div>
    );
};

export default Contact;
