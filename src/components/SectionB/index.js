import React from "react";
import icon from "../../assets/svgs/Group 25.png";
import world from "../../assets/svgs/Earth.png";
import worldMobile from "../../assets/svgs/earth-mobile.png";
import student from "../../assets/svgs/Group 53.png";
import orbitChain from "../../assets/svgs/Ellipse 75.png";
import orbitChainMobile from "../../assets/svgs/orbit-mobile.png";

const SectionB = () => {
  return (
    <div className="SectionB">
      <div className="container">
        <div className="section-title">
          <span className="title"><h1>For you</h1></span>
          {/* underline */}
          <div className="underline">
            <img src={icon} alt="icon" />
          </div>
        </div>

        <div className="section-middle">
          <div className="bg-stars">
            <div className="world-img">
              <span className="Ellipse-71"></span>
              {/* desktop only img */}
              <img src={world} className="earth earth-img-desktop" alt="world"  />
              {/* mobile only img */}
              <img src={worldMobile} className="earth-img-mobile" alt="world"  />
              <span className="Ellipse-73"></span>
              <span className="Ellipse-72"></span>
              <img src={student} className="student-img" alt="student" />

              {/* desktop only img */}

              <img
                src={orbitChain}
                className="orbitChain-img orbitChain-img-desktop "
                alt="orbitChain"
              />
              {/* mobile only img */}
              {/* <img
                src={orbitChainMobile}
                className=" orbitChain-img-mobile "
                alt="orbitChain"
              /> */}
            </div>
          </div>
        </div>
        <div className="section-footer">
          <div className="section-footer-title " >
            Tutors from <br /> around the world
          </div>
          <div className="section-footer-underline">
            Get premium education from top tutors around the world. You are{" "}
            <br /> guaranteed to learn the basics of how web3 works and how to
            benefit from it
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
