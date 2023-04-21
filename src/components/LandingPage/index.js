import React from "react";
import workstation from "../../assets/svgs/LandingPageImg.png";
// import workstationMobile from "../../assets/svgs/workspaceMobile.png";
import spotlight from "../../assets/svgs/polygon-5.svg";
import mail from "../../assets/Icons/Vector.png";
import firstImg from "../../assets/svgs/banner_1_image.png";
import secondImg from "../../assets/svgs/banner_2_image.png";
import thirdImg from "../../assets/svgs/banner_3_image.png";
// import arrowRight from "../../assets/Icons/arrow-right.png";
import Slider from "react-slick";

import LeftArrow from "../../assets/Icons/left-arrow.svg";
import RightArrow from "../../assets/Icons/right-arrow.svg";
import Banner from "../Banner";

const LandingPage = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  var settings = {
    autoplaySpeed: 7000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div className="landingPage">
      <div className="container">
        <div className="bg-img">
          <div className="section-header">
            {/* for pc and tab */}
            <img
              src={workstation}
              className="workstation-bigScreen"
              alt="workstation"
            />

            {/* for mobile */}
            {/* <img src={workstationMobile} alt="workstation" className="mobile-img" /> */}
          </div>
          <div className="section-body">
            <div
              className="title"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              <h1>
                Empower Your Students{" "}
                <span className="title-white">Earn as You Learn</span>
              </h1>
            </div>
            <div className="section-footer-underline">
              Your Students Earn Daily $K12 Rewards as they Build Real-World
              Skills on <br /> The Premier Crypto Platform For Education and
              Financial Literacy
            </div>
          </div>
          <div className="section-footer">
            {/* subscribe to our newsletter to get the latest updates */}
            <div className="mail-input">
              <img src={mail} alt="mail" />
              <input
                type="email"
                placeholder="Enter your email to find out more..."
              />
            </div>
            <button className="sign-up-now-btn">
              {" "}
              <a
                href="https://it2y5hd8am2.typeform.com/to/vQSqREom"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Join Waitlist{" "}
              </a>{" "}
            </button>
          </div>
        </div>
      </div>

      {/* mobile container */}

      <div className="mobile-container">
        <div className="slider-wrapper">
          <div className="effects-section">
            <div className="ellipse-81"></div>
            <div className="ellipse-83"></div>
            <div className="ellipse-82"></div>
            <div className="polygon-5">
              <img src={spotlight} alt="" />
            </div>
          </div>
          <Slider {...settings}>
            <div>
              <Banner src={firstImg} title={`Learn to <br/>Earn`} />
            </div>
            <div>
              <Banner
                src={secondImg}
                title="Top courses <br/>from Top tutors"
              />
            </div>
            <div>
              <Banner src={thirdImg} title="Learn from <br/>anywhere" />
            </div>
          </Slider>
        </div>
        <div className="form-field">
          <div className="mail-input">
            <img src={mail} alt="mail" />
            <input
              type="email"
              className="email-placeholder"
              placeholder="Join The Waitlist!"
            />
          </div>

          <button className="signUp-btn">
          <a href="https://it2y5hd8am2.typeform.com/to/vQSqREom" target="_blank" rel="noreferrer">
            Get Access
          </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
