import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            <NavLink to="country">Start Exploring <FaLongArrowAltRight/></NavLink>
          </button>
        </div>
        <div className="hero-image">
          <img className="banner-image" src="/images/world.png" alt="world beauty" />
        </div>
      </div>
    </main>
  );
};

export default Home;
