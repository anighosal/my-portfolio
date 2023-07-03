import React from "react";

import { skills } from "../../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="">
      <h2 className="text-center font-bold text-3xl mb-8 text-ass-800 mt-4">
        ----- My Skills----
      </h2>
      <div className="skills-container grid">
        {skills.map(({ title, percentage }, index) => {
          return (
            <div className="progress-box" key={index}>
              <div className="progress-circle">
                <CircularProgressbar
                  strokeWidth={3.5}
                  text={`${percentage}`}
                  value={percentage}
                ></CircularProgressbar>
              </div>
              <h3 className="skills-title">{title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
