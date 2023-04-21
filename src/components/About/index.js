import React, { useState } from "react";
import ModalContainer from "../../components/ModalContainer";
import about from "../../assets/images/about.png";

const About = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <div className="about container-xl">
        <div className="container">
          <div className="inner-container">
            <div className="inner-container-text">
              <div className="inner-container-desc">
                As pioneers in education and emerging technologies, our team is
                focused on evolving the education model for K12 students with a
                focus on finance, multi-disciplinary skills and an incentivized
                earning system via cryptocurrency.
              </div>
              <div className="inner-container-long-desc">
                <h5>The Plan</h5>
                <p>
                  At K12 Crypto, we identify pain points in the current
                  education system and create solutions for the future, powered
                  by decentralized finance
                </p>
              </div>
              <div className="inner-container-ReadMore">
                <div className="" onClick={() => setShowText(true)}>
                  Read More
                </div>
              </div>
            </div>
            <div>
              <img src={about} alt="about" className="aboutImg" />
            </div>
          </div>
          {/* services */}
          <div className="services-container">
            <div className="service-card">
              <h4>ACCESSIBLE</h4>
              <p>
                We emphasize accessibility, unlike most platforms, meaning
                children facing disabilities have an equal playing field with
                their peers - this is home, as it always should be.
              </p>
            </div>
            <div className="service-card">
              <h4>GROWTH-DRIVEN</h4>
              <p>
                Our growth model and platform structure means children can
                create amateur-level content for their peers under the guidance
                of organizations and districts - this reinforces their skillsets
                and learnings while readying them for the ever-growing creator
                economy - a Billion dollar industry.
              </p>
            </div>
            <div className="service-card">
              <h4>GLOBAL</h4>
              <p>
                Our long-term goal is to ensure access to education bodies and
                institutions for enrolling students worldwide - this is built on
                our tokenomics model, a bulletproof strategy for diversity and
                inclusion on a global scale.
              </p>
            </div>
          </div>
        </div>
        {/* popup */}
        <ModalContainer
          show={showText}
          closeFunction={() => {
            setShowText(false);
          }}
          // temp   event mangement
          maxHeightAllocated={740}
          maxWidthAllocated={1100}
        >
          <AboutReadMore />
        </ModalContainer>
      </div>
    </>
  );
};

export default About;

function AboutReadMore() {
  return (
    <div className="About-ReadMore-content">
      <div className="read-more-heading">
        <h4>OUR PLAN</h4>
      </div>
      <div className="description-container">
        <p>Read more about K12Crypto here!</p>
        <a href="https://k12crypto.notion.site/K12-Crypto-018e60532144470f9880030b6850c122">
          {" "}
          Read More here!{" "}
        </a>
      </div>
    </div>
  );
}
