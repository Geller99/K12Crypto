import React from "react";
import cube from "../../assets/Icons/Rectangle 3.png";

const Teams = () => {
  return (
    <div className="team">
      <div className="team__container">
        <div className="part-1">
          <div className="Team-title">
            TEAM
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              temporibus ducimus exercitationem minima blanditiis excepturi amet
              veritatis dicta, suscipit incidunt!
            </p>
          </div>
        </div>
        <div className="part-2">
          <div className="team-member">
            <div className="image-wrapper">
              <img
                src="https://i.picsum.photos/id/768/200/200.jpg?hmac=CZCVsqJECKhkvl5gzeCA0O5iSMmRn_RVFzVrREOE7ws"
                alt="team-image"
              />
            </div>
            <div className="text-content-wrapper">
              <div className="header">
                <h3>John Doe</h3>
                <p>Head of Community</p>
                <p>@johndoe</p>
              </div>
              <span className="dashline"></span>
              <div className="detail">
                <ul>
                  <li>Startup entrepreneur</li>
                  <li>Scaled a community from 0 to 5 million users.</li>
                  <li>Startup entrepreneur</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="image-wrapper">
              <img
                src="https://i.picsum.photos/id/768/200/200.jpg?hmac=CZCVsqJECKhkvl5gzeCA0O5iSMmRn_RVFzVrREOE7ws"
                alt="team-image"
              />
            </div>
            <div className="text-content-wrapper">
              <div className="header">
                <h3>John Doe</h3>
                <p>CEO</p>
                <p>@johndoe</p>
              </div>
              <span className="dashline"></span>
              <div className="detail">
                <ul>
                  <li>Startup entrepreneur</li>
                  <li>Scaled a community from 0 to 5 million users.</li>
                  <li>Startup entrepreneur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="part-3">
          <div className="tags-Container">
            <div className="tag-wrapper">
              <img src={cube} alt="cube" />
              <h3>1 HEAD OF ENGINEERING</h3>
            </div>
            <div className="tag-wrapper">
              <img src={cube} alt="cube" />
              <h3>1 HEAD OF ENGINEERING</h3>
            </div>
            <div className="tag-wrapper">
              <img src={cube} alt="cube" />
              <h3>1 HEAD OF ENGINEERING</h3>
            </div>
            <div className="tag-wrapper">
              <img src={cube} alt="cube" />
              <h3>1 HEAD OF ENGINEERING</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
