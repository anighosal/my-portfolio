import React from "react";
import img from "../../assets/311659442_5425489020863010_6159443013925270000_n.jpg";
import { FaArrowDown, FaDownload } from "react-icons/fa";
import cv from "../../assets/Resume_3.pdf";
import "./About.css";
import { Fade, Slide } from "react-awesome-reveal";
const About = () => {
  return (
    <main className="section container mt-8">
      <section className="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-container grid">
          <div>
            <Slide>
              <img src={img} alt="" />
            </Slide>
          </div>
          <div>
            <Fade right>
              <p>
                Welcome to my portfolio, a passionate and enthusiastic MERN
                (MongoDB, Express.js, React.js, Node.js) stack developer eager
                to kickstart my career in web development. As a recent graduate,
                I am equipped with a solid foundation in programming and a
                strong drive to learn and grow as a developer. <br />
                During my studies, I developed a keen interest in full-stack
                development, and the MERN stack caught my attention due to its
                versatility and widespread use in the industry. I have spent
                considerable time honing my skills in each component of the MERN
                stack, and I am excited to apply my knowledge to real-world
                projects.
              </p>
            </Fade>
            <a href={cv} className="button text-white">
              Download resume
              <span className="button-icon">
                {" "}
                <FaDownload></FaDownload>{" "}
              </span>{" "}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
