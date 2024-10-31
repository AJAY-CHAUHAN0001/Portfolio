import React from "react";
import "./Intro.css";
import bg from "../../asset/bg1.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
import bgImg from '../../asset/bg-img.svg';

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Ajay Kumar</span>
          <br />
          Full Stack Developer
        </span>
        <p className="introPara">
          I am a skilled full stack developer with creating visually <br /> appealing and user
          friendly websites.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={1000}>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg"/>
            Hire Me
          </button>
        </Link>
      </div>
      <img src={1} alt="profile" className="bg" />
      {/* <img src={bgImg} alt="bg" className="bg"/> */}
    </section>
  );
};
