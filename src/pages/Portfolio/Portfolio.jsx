import React from "react";
import IMG1 from "../../assets/Screenshot_21.jpg";
import IMG2 from "../../assets/Screenshot_1.jpg";
import IMG3 from "../../assets/Screenshot_2.jpg";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section-title">
        My <span>Portfolio</span>
      </h2>

      <div className="container portfolio-container grid">
        <div className="card w-96 border border-gray-300">
          <figure>
            <img src={IMG3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h3 className="mt-5 font-bold text-2xl">Chef Hunt</h3>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <a
                href="https://the-chef-recipe-e2cb1.web.app/"
                className="btn btn-primary mt-3"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 border border-gray-300">
          <figure>
            <img src={IMG2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h3 className="mt-5 font-bold text-2xl">Toy marketplace</h3>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <a
                href="https://animal-toys-c416c.web.app/"
                className="btn btn-primary mt-3"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 border border-gray-300">
          <figure>
            <img src={IMG1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h3 className="mt-5 font-bold text-2xl">Summer Camp</h3>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <a
                href="https://music-king-88980.web.app/"
                className="btn btn-primary mt-3"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
