import React from 'react'
import "./animations.css"

const AnimatedHeading = ({ title, className }) => {
  return (
    <div className='overflow-hidden bg-red-400'>

    <div className='animated-heading  '>
      <h2 className={`${className}`}>{title}</h2>
      <div className='w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-5'></div>
    </div>
    </div>
  )
}

export default AnimatedHeading