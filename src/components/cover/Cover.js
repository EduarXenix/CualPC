import React from "react";
import "./Cover.css";
import coverVideo from "../../media/Video Card - 15793.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Bienvenido</h1>
      <p>Al hogar de los mejores equipos de computo</p>
      <p></p>
    </div>
  );
};

export default Cover;
