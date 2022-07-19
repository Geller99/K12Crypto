import React from "react";
import AvtarCard from "../AvatarCard";
import smallDot from "../../assets/svgs/Group 25.png";




import cybrog1 from "../../assets/Avatar/cyborg 1.png";
import cybrog2 from "../../assets/Avatar/cyborg 2.png";
import cybrog3 from "../../assets/Avatar/cyborg 3.png";
import cybrog4 from "../../assets/Avatar/cyborg 4.png";


import lock from "../../assets/svgs/lock.svg";

const SectionD = () => {
  return (
    <div className="sectionD">
      <div className="bg-container">
        <span className="polygonLeft"></span>
        {/* deskStop only */}
        <div className="avatar-grid">
          <div className="part-1">
            <div className="avatar-card card-1">
              <div className="Card-header">
                <img src={smallDot} alt="smallDot" />
                <h4>Current selected</h4>
              </div>
              <img src={cybrog4} className="big-cybrog" alt="cybrog" />
            </div>
          </div>
          <div className="part-2">
            <AvtarCard imgUrl={cybrog3} />
            <AvtarCard imgUrl={cybrog2} />
            <AvtarCard imgUrl={cybrog1} />
            <AvtarCard imgUrl={lock} />
            <AvtarCard imgUrl={lock} />
            <AvtarCard imgUrl={lock} />
          </div>
        </div>

        {/* mobile only avatar */}

        <div className="avatar-mobile">
          <div className="avatar-card card-1">
            <div className="Card-header">
              <img src={smallDot} alt="smallDot" />
              <h4>Current selected</h4>
            </div>
            <img src={cybrog4} className="big-cybrog" alt="cybrog" />
          </div>
          <div className="avatar-mobile-part-2">
            <div className="mobile-avatar-small-card">
              <div className="avatar-card">
                <img src={cybrog1} alt="cybrog1" />
              </div>
            </div>
            <div className="mobile-avatar-small-card">
              <div className="avatar-card">
                <img src={cybrog3} alt="cybrog1" />
              </div>
            </div>
          </div>
        </div>

        <span className="polygonRight"></span>

        <div className="section-footer">
          <div className="section-footer-title">Avatar creation</div>
          <div className="section-footer-underline">
          The K12 app will feature key customizations like avatars and traits,{" "}
            <br /> enabling a fully immersive experience around expression and creativity
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionD;
