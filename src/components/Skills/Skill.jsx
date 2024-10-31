import React from "react";
import "./Skill.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../asset/frelence3.png";

export const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">
        What I Do
      </span>
      <span className="skillDesc">
       I'm a skilled and passionate web designing and creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript.
      </span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>I focuses on creating intuitive, aesthetically pleasing interfaces(UI) and enhancing user experiences(UX)</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Design</h2>
                <p>I am also passionate about the web designing and creating the diffrent website.</p>
            </div>
        </div>
        {/* <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Freelancing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, assumenda.</p>
            </div>
        </div> */}
      </div>
    </section>
  );
};
