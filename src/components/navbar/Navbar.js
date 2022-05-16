import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        <img src={require("../../media/Logo de cualpc-white.png")} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
