import React from 'react'
import CountUp from 'react-countup'

const ServiceCard = ({card}) => {
    const {id,value,image,label} = card

  return (
    <div>
        <div className="p-12 bg-white rounded-2xl">
            <img src={image} alt="" className='mb-6' />
            <div className="text-7xl font-extrabold mb-3">
                <CountUp 
                end={value} 
                duration={3}
                separator=","
                enableScrollSpy 
                />+</div>
            <p className='font-semibold text-2xl'>{label}</p>
        </div>
      
    </div>
  )
}

export default ServiceCard
