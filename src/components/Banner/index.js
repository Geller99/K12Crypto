import React from 'react'
// import spotlight from '../../assets/svgs/polygon-5.svg'
function Banner({
    src,
    title
}) {
  return (
    <div className='banner-section'>
        {/* <div className='effects-section'>
            <div className='ellipse-81'></div>
            <div className='ellipse-83'></div>
            <div className='ellipse-82'></div>
            <div className='polygon-5'>
                <img src={spotlight} alt=""/>
            </div>
        </div> */}
        <img className='subject-image' src={src} alt=""/>
        <div className='banner-title' dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  )
}

export default Banner