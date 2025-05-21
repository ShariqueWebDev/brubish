import Heading from '@/components/shared/Heading'
import Image from 'next/image'
import React from 'react'

const data = [
    {
        id:1,
        name:"Packing",
        icon:"/services/vas/v1.svg"
    },
    {
        id:2,
        name:"Re-Packing",
        icon:"/services/vas/v2.svg"
    },
    {
        id:3,
        name:"Unit Packing",
        icon:"/services/vas/v3.svg"
    },
    {
        id:4,
        name:"Bar Code Labelling",
        icon:"/services/vas/v4.svg"
    },
    {
        id:5,
        name:"Palletization",
        icon:"/services/vas/v5.svg"
    },
    {
        id:6,
        name:"ESD Packing",
        icon:"/services/vas/v6.svg"
    }, {
        id:7,
        name:"Stickering",
        icon:"/services/vas/v7.svg"
    },
    {
        id:8,
        name:"Line Feeding",
        icon:"/services/vas/v8.svg"
    },
    {
        id:9,
        name:"Quality Validation",
        icon:"/services/vas/v9.svg"
    }, 
    {
        id:10,
        name:"Kitting",
        icon:"/services/vas/v10.svg"
    }
]





const Vasone = () => {
  return (
    <div className='sjcontainer my-20 md:my-32'>
        <Heading className=' text-center mb-4 md:mb-8' title='Value Added Services' />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border'>
            {
                data.map((item) => (
                    <div key={item.id} className=' border p-6 '>
                        <Image height={100} width={100} className='w-20 mx-auto'  src={item.icon} alt={item.name} />
                        <h3 className='text-sm text-gray-600 mt-4 md:text-base text-center  font-[400]'>{item.name}</h3>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Vasone
