import React from "react";
import cube from "../../assets/Icons/Rectangle 3.png";
import Rahh from "../../assets/images/image_6487327.JPG";
import BJ from "../../assets/images/image_6487327 (1).JPG";

const Teams = () => {
  return (
    <div className="team">
      <div className="team__container">
        <div className="part-1">
          <div className="Team-title">
            Team K12Crypto
            <p>
              Meet the collection of talented individuals with multi-disciplinary skills accross decentralized finance, education, engineering, accessibility and legal matters working together to scale the next premier education platform
            </p>
          </div>
        </div>
        <div className="part-2">
          <div className="team-member">
            <div className="image-wrapper">
              <img
                src={Rahh}
                alt="team-img"
                style={{height: "200px", width: "200px"}}
              />
            </div>
            <div className="text-content-wrapper">
              <div className="header">
                <h3>Principal Rahh</h3>
                <p>Founder & CEO</p>
                <p>@PrincipalRahh</p>
              </div>
              <span className="dashline"></span>
              <div className="detail">
                <ul>
                  <li>Former Head Principal</li>
                  <li>Built a school with multi-year 100% graduation rates</li>
                  <li>Startup Founder</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="image-wrapper">
              <img
                src={BJ}
                alt="team-img"
                style={{height: "200px", width: "200px"}}
              />
            </div>
            <div className="text-content-wrapper">
              <div className="header">
                <h3>B.J. Abron</h3>
                <p>Co-Founder</p>
                <p>@CryptoLawyerCA</p>
              </div>
              <span className="dashline"></span>
              <div className="detail">
                <ul>
                  <li>Lawyer</li>
                  <li>Crypto Attorney</li>
                  <li>Startup Founder</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="part-3">
          <div className="tags-Container">
            <div className="tag-wrapper">
              <img src={cube} alt="cube" />
              <h3>ONE HEAD OF ENGINEERING</h3>
            </div>
            <div className="tag-wrapper">
              <img src={cube} alt="cube" />
              <h3>ONE HEAD OF TOKENOMICS</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
