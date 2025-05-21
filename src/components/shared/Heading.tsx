import React from 'react'

const Heading = ({title="",className=" text-center lg:text-left "}) => {
  return (
    <h2 className={`text-3xl text-amber-500    md:text-4xl   py-1.5  font-[400] ${className}`}>{title}</h2>
  )
}

export default Heading