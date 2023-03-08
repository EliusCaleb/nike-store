import React from 'react'

function SocialLinks({icon }) {
  return (
    <>
        <img
        src={icon}
        alt= 'icon/social'
        className='w-12 h-12  md:w-8  md:h-8  sm:w-6 sm:h-6 flex items-center cursor-pointer transition-all duration-200 hover:scale-110 '
        />
    </>
  )
}

export default SocialLinks