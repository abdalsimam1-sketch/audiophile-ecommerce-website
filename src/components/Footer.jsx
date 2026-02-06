import logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer p-5 d-flex flex-column text-white text-center text-md-start gap-3 gap-md-3">
      <div className="container ">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between  gap-3 mb-md-3">
          <img src={logo} alt="logo" className="" />
          <div className="nav-links d-flex flex-column flex-md-row gap-3">
            <Link to="/">HOME</Link>
            <Link to="">HEADPHONES</Link>
            <Link>SPEAKERS</Link>
            <Link>EARPHONES</Link>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
          <p className="footer-text">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility we’re open 7 days a week.
          </p>
          <div className="text-white d-flex fs-4 gap-3 mx-auto m-md-0  footer-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </div>

        <p>Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
};
