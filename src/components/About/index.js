import React, { useState } from "react";
import ModalContainer from "../../components/ModalContainer";
import about from "../../assets/images/about.png";

const About = () => {
  const [showText, setShowText] = useState(false)
  return (
    <>
      <div className="about container-xl">
        <div className="container">
          <div className="inner-container">
            <div className="inner-container-text">
              <div className="inner-container-desc">
                Our mission is to educate new friends in the NFT space and provide
                them with the knowledge and platform to earn that is accessible,
                affordable, and user friendly.
              </div>
              <div className="inner-container-long-desc">
                <h5>OUR LORE</h5>
                <p>
                  As Tiny Astros, we are all space explorers on a mission to
                  rebuild our civilization while we explore the Web3 world
                  together...
                </p>
              </div>
              <div className="inner-container-ReadMore">
                <div className=""
                  onClick={() => setShowText(true)}

                >Read More</div>
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
              <p>Providing more access to our community and suite of tools to new friends entering the Web3 space through the Tiny Astro ecosystem.</p>
            </div>
            <div className="service-card">
              <h4>AFFORDABLE</h4>
              <p>Providing more access to our community and suite of tools to new friends entering the Web3 space through the Tiny Astro ecosystem.</p>
            </div>
            <div className="service-card">
              <h4>USER FRIENDLY</h4>
              <p>Providing more access to our community and suite of tools to new friends entering the Web3 space through the Tiny Astro ecosystem.</p>
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

          <AboutReadMore

          />

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
        <h4>OUR LORE</h4>

      </div>
      <div className="description-container">
        <p>
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          civilization while we explore the Web3 world together...
        </p>
        <p>
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          civilization while we explore the Web3 world together...
        </p>
        <p>
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          civilization while we explore the Web3 world together...
        </p>
        <p>
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          civilization while we explore the Web3 world together...
        </p>
        <p>
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          As Tiny Astros, we are all space explorers on a mission to rebuild our
          civilization while we explore the Web3 world together...
        </p>
      </div>
    </div>
  );
}