import React from 'react'
import male_character_sitting_on_chair_and_reading_a_book_1 from '../../assets/svgs/male-character-sitting-on-chair-and-reading-a-book-1.png'
import young_boy_with_flying_pose_1 from '../../assets/svgs/young-boy-with-flying-pose-1.png'
function Card1() {
    return (
        <div className='footer-card card-1'>
            <div className='effect-container'>
                <div className='ellipse-79'></div>
                <img src={young_boy_with_flying_pose_1} className="flying-person" />
                <img src={male_character_sitting_on_chair_and_reading_a_book_1} className="book-reading-person" />
            </div>
            <div className='content'>
                <div className='heading'>Access thousands <br />of courses</div>
                <div className='sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus lorem facilisi tortor, eu laoreet quis. </div>
                <a href="/" className='transparent-btn'>Sign up now</a>
            </div>
        </div>
    )
}

export default Card1