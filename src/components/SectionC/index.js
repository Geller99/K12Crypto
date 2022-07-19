import React from 'react'
import coinBox from '../../assets/svgs/coin-in-hand 1.png'

const SectionC = () => {
  return (
    <div className="sectionC">
        <div className="container">
            <div className="section-body">
                <div className="bg-img">
                    <img src={coinBox} className="coinBox-img" alt="coinBox" />
                    <span className="Polygon"></span>
                    <div className="section-footer">
                <div className="section-footer-title">
                Learn with K12Crypto <br/> Earn in $K12 
                    </div>
                    <div className="section-footer-underline">
                    The $K12 token provides a learning incentive for students {" "}
            <br /> and guarantees cumulative value towards their post-K12 education.
          </div>
                    </div>
                </div>
               
            </div>
            
            
        </div>
    </div>
  )
}

export default SectionC