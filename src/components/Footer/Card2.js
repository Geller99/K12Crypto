import React from 'react'
import sms from '../../assets/svgs/sms.png'
import coin_gfit_1 from '../../assets/svgs/coin-gfit-1.png'
function Card2() {
    return (
        <div className='footer-card card-2'>
            <div className='effect-container'>
                <div className='polygon-4'></div>
                <img src={coin_gfit_1} className="coin_gift_1" />
            </div>
            <div className='content'>
                <div className='heading'>Register now and get <br />free tokens</div>
                <form className='signup-form'>
                    <div className='mail-input'>
                        <img src={sms} alt="sms" />
                        <input
                            type="email"
                            placeholder='Enter email for updates'
                        />
                    </div>
                    <button type="submit" className='sign-up-now-btn'>
                        Sign up now
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Card2