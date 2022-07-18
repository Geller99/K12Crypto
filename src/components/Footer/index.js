import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import FooterEffects from './FooterEffects'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-grid'>
            <div className='part-1'>
            <Card1/>
            </div>
            <div className='part-2'>
                  <Card2/>
                
                  <Card3/>
            </div>
        </div>
        <FooterEffects/>
    </div>
  )
}

export default Footer