import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Información sobre nosotros</h3>
        <p>Somos una empresa dedica a emsamblar equipos de computo.</p>

        <p>
          Contamos con una amplia experiencia en nuestro sector, y con mucho
          clientes satisfechos con nuestro servicio, brindamos una experiencia
          personalizada para cada cliente.
        </p>

        <p>
          Hemos trabajado con grandes empresas, equipos de esport, streamers,
          youtuber, y personas casuales, montamos toda clases de ornadores de
          sobre mesa.
        </p>
      </div>
      <div className="about-img">
        <img src={require("../../media/cliente.jpg")} alt="about" />
      </div>
    </div>
  );
};

export default About;
