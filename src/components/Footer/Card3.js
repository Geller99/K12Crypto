import React from 'react'
import facebook_icon from '../../assets/svgs/facebook_icon.svg'
import instagram_icon from '../../assets/svgs/instagram_icon.svg'
import global_icon from '../../assets/svgs/global_icon.svg'
import twitter_icon from '../../assets/svgs/twitter_icon.svg'
import luve_on_mars_1 from '../../assets/svgs/luve-on-mars-1.png'
function Card3() {
    return (
        <div className='footer-card card-3'>
            <div className='effect-container'>
                <div className='ellipse-78'></div>
                <img src={luve_on_mars_1} className="luve_on_mars_1" />
            </div>
            <div className='content'>
                <div className='heading'>Join our community to <br />stay informed</div>
                <div className='sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus lorem facilisi tortor, eu laoreet quis. </div>
                <div className='social-icons'>
                    <div className='icon'>
                        <img src={facebook_icon} alt="facebook" />
                    </div>
                    <div className='icon'>
                        <img src={instagram_icon} alt="instagram" />
                    </div>
                    <div className='icon'>
                        <img src={global_icon} alt="global" />
                    </div>
                    <div className='icon'>
                        <img src={twitter_icon} alt="twitter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card3