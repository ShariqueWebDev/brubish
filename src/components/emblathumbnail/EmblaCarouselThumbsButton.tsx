import React from 'react'

type PropType = {
  data: any;
  selected: boolean;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick,data } = props

  return (
    <div  onClick={onClick}
      className={' cursor-pointer flex-1 mx-auto'.concat(
        selected ? ' border-b-2 border-black pb-1  ' : ' opacity-55'
      )}
    >
        <span className=' py-2 px-2 md:py-4 mb-2  flex  items-center justify-center w-10  md:w-16 mx-auto   border rounded-full bg-gray-300  '>{data.icon}</span>
        <p className='text-center text-xs md:text-sm'>{data.name}</p>
     
    </div>
  )
}
