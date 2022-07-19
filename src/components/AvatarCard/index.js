import React from 'react'


const AvtarCard = ({imgUrl}) => {
  return (
   <div className="avatar-small-card">
        <div className="avatar-card">
        <img src={imgUrl} alt="cybrog1" />
        </div>
   </div>
  )
}

export default AvtarCard