import React from "react";
import "./Slider.css";
// import pc1 from "../../media/pc1.jpg";

const slidesInfo = [
  {
    src: "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg",
    alt: "Proyecto Artemis",
    desc: "Proyecto Artemis",
  },
  {
    src: "https://i.pinimg.com/originals/75/de/e2/75dee2a748ea4749af7c45177c4288cf.jpg",
    alt: "PC Streamer",
    desc: "PC Streamer",
  },
  {
    src: "https://cdna.pcpartpicker.com/static/forever/images/userbuild/200817.0173542bb3f9b91204737852795f53af.1600.jpg",
    alt: "PC Gamer",
    desc: "PC Gamer",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
