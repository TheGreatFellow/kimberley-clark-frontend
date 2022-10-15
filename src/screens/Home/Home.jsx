import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let height = window.innerHeight;
  let width = window.innerWidth;
  return (
    <>
      <div className="home-container">
        <Link className="home-card" to="/collect">
          <img
            src="https://img.icons8.com/doodle/192/000000/sleeping-baby--v1.png"
            className="home-img"
          />
          <p className="home-title">Know your baby's skin</p>
        </Link>
        <Link className="home-card" to="/quiz/creator">
          <img
            src="https://img.icons8.com/plasticine/200/000000/the-legend-of-zelda-skyward-sword.png"
            className="home-img"
          />
          <p className="home-title">Couple wars</p>
        </Link>
        <Link className="home-card" to="/games/wordle">
          <img
            src="https://img.icons8.com/doodle/192/000000/nintendo-switch-pro-controller.png"
            className="home-img"
          />
          <p className="home-title">Chill zone</p>
        </Link>
        <Link className="home-card" to="/profile">
          <img
            src="https://img.icons8.com/doodle/96/000000/laurel-wreath.png"
            className="home-img"
          />
          <p className="home-title">Achievements</p>
        </Link>
      </div>
    </>
  );
};

export default Home;
