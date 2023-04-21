import React from "react";
import sms from "../../assets/svgs/sms.png";
import coin_gfit_1 from "../../assets/svgs/coin-gfit-1.png";
function Card2() {
  return (
    <div className="footer-card card-2">
      <div className="effect-container">
        <div className="polygon-4"></div>
        <img src={coin_gfit_1} alt="" className="coin_gift_1" />
      </div>
      <div className="content">
        <div className="heading">
          Register now and claim <br />
          your $K12 tokens
        </div>
        <form className="signup-form">
          <div className="mail-input">
            <img src={sms} alt="sms" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button type="submit" className="sign-up-now-btn">
            <a
              href="https://it2y5hd8am2.typeform.com/to/vQSqREom"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Join Waitlist{" "}
            </a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card2;
