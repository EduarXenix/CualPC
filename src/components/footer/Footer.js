import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Ciudad de Mexico</h1>
        <p>hola@cualpc.com</p>
      </div>
      <div className="footer-contact">
        <h3>Contactanos</h3>
        <p>Y hagamos ese PC que tanto quieres</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">© 2022 CualPC</div>
        <div className="sns-links">
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube youtube"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
