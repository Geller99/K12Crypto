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
                A token of appreciation <br/> for your time
                    </div>
                    <div className="section-footer-underline">
            Get premium education from top tutors around the world. You are{" "}
            <br /> guaranteed to learn the basics of how web3 works and how to
            benefit from it
          </div>
                    </div>
                </div>
               
            </div>
            
            
        </div>
    </div>
  )
}

export default SectionC