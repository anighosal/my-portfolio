import React from "react";
import profile from "../../assets/275782945_4801929829885602_3703333568475087947_n.jpg";
import { Link } from "react-router-dom";
import "./Home.css";
import About from "../About/About";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <section className="home section grid">
      <img src={profile} alt="" className="home-img" />
      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title">Hello, I'M Ani Ghosal</h1>
          <h1
            className="font-bold text-3xl"
            style={{
              paddingTop: "5rem",
              margin: "auto 0",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            I am a{" "}
            <span style={{ color: "purple", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Web developer",
                  "Mern stack developer",
                  "Front end developer",
                  "Full stack developer!",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>

          <p className="home-des">
            As a MERN stack and front-end developer, my portfolio showcases my
            expertise in building web applications using the MERN stack
            (MongoDB, Express.js, React, and Node.js) as well as my skills in
            front-end development.
          </p>
        </div>
      </div>
      <div className="color-block"></div>
    </section>
  );
};

export default Home;
