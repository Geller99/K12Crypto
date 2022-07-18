import React from "react";
import workstation from "../../assets/svgs/LandingPageImg.png";
import workstationMobile from "../../assets/svgs/workspaceMobile.png";
import spotlight from "../../assets/svgs/polygon-5.svg";
import mail from "../../assets/Icons/Vector.png";
import firstImg from "../../assets/svgs/banner_1_image.png";
import secondImg from "../../assets/svgs/banner_2_image.png";
import thirdImg from "../../assets/svgs/banner_3_image.png";
import arrowRight from "../../assets/Icons/arrow-right.png";
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
            <div className="title" data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine">
              <h1>
                Get <span className="title-white">paid to learn</span> web3
              </h1>
            </div>
            <div className="section-footer-underline" 

            >
              Learning web 3 made fun and innovative for students , earn rewards
              by <br /> completing courses , logging in daily and completing
              modules
            </div>
          </div>
          <div className="section-footer">
            {/* subscribe to our newsletter to get the latest updates */}
            <div className="mail-input">
              <img src={mail} alt="mail" />
              <input type="email" placeholder="Enter email for updates" />
            </div>
            <button className="sign-up-now-btn">Sign up now</button>
          </div>
        </div>
      </div>

      {/* mobile container */}

      <div className="mobile-container">
        <div className="slider-wrapper">
          <div className='effects-section'>
            <div className='ellipse-81'></div>
            <div className='ellipse-83'></div>
            <div className='ellipse-82'></div>
            <div className='polygon-5'>
              <img src={spotlight} alt="" />
            </div>
          </div>
          <Slider {...settings}>
            <div>
              <Banner
                src={firstImg}
                title={`Learn to <br/>Earn`}
              />
            </div>
            <div>
              <Banner
                src={secondImg}
                title="Top courses <br/>from Top tutors"
              />
            </div>
            <div>
              <Banner
                src={thirdImg}
                title="Learn from <br/>anywhere"
              />
            </div>
          </Slider>
        </div>
        <div className="form-field">
          <div className="mail-input">
            <img src={mail} alt="mail" />
            <input type="email" className="email-placeholder" placeholder="Enter email for updates" />
          </div>
          <button className="signUp-btn">
            <img src={arrowRight} alt="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;