import React from 'react'
import male_character_sitting_on_chair_and_reading_a_book_1 from '../../assets/svgs/male-character-sitting-on-chair-and-reading-a-book-1.png'
import young_boy_with_flying_pose_1 from '../../assets/svgs/young-boy-with-flying-pose-1.png'
function Card1() {
    return (
        <div className='footer-card card-1'>
            <div className='effect-container'>
                <div className='ellipse-79'></div>
                <img src={young_boy_with_flying_pose_1} alt='' className="flying-person" />
                <img src={male_character_sitting_on_chair_and_reading_a_book_1} alt='' className="book-reading-person" />
            </div>
            <div className='content'>
                <div className='heading'>Access an Elite Tier <br />of Courses</div>
                <div className='sub-heading'>K12Crypto partners with top institutions worldwide to provide a globally accredited education standard for students </div>
                <a href="/" className='transparent-btn'>Get Started</a>
            </div>
        </div>
    )
}

export default Card1