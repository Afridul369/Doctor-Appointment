import React from 'react'

const Doctor = ({doctor}) => {
    // console.log(doctor)
    const {id,name,image,education,registrationNumber,speciality, experience} = doctor
  return (
    <div className='px-8 py-6 bg-white rounded-2xl'>
        <img src={image} alt="" className='rounded-2xl mb-4 w-full h-74 object-cover object-top' />    
        <div className="flex gap-6 mb-4">
            <p className='px-3 rounded-2xl border border-[#5bbb75] py-1 bg-[#e6f5ea] text-[#5bbb75]'>Available</p>
            <p className='px-3 rounded-2xl border border-[#176AE5] py-1 font-medium bg-[#176AE520] text-[#176AE5]'>{experience}+ Years Experience</p>
        </div>
        <h1 className='text-2xl font-extrabold mb-3'>{name}</h1>
        <p className='text-xl font-medium text-[#0F0F0F60]'>{education}</p>
        <div className="border-t border-dashed my-4"></div>
        <div className="text-xl font-medium text-[#0F0F0F90] mb-4">® REG NO: {registrationNumber}</div>
        <button className="btn w-108 rounded-3xl text-[#176AE5] text-xl font-bold py-7 border-2 border-[#176AE5]">View Details</button>
    </div>
  )
}

export default Doctor
