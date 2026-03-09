import React from 'react'

const DetailsBox = ({data}) => {
    const {name, image,education,registrationNumber} = data 
  return (
    <div className='p-8 my-4'>
        <div className="p-6 flex gap-10 bg-white rounded-3xl">
            <div className="">
                <img src={image} alt=""  className='rounded-3xl  h-90 object-cover object-top ' />
            </div>
            <div className="p-3">
                <h1 className='text-3xl font-extrabold mb-3'>{name}</h1>
                <p className='font-medium mb-3'>{education}</p>
                <p className='font-medium mb-3'>Working At</p>
                <p className='text-xl font-bold mb-3'>{education}</p>
                <div className="border-t border-dashed my-2"></div>
                <div className="text-base font-medium text-[#0F0F0F90]">® REG NO: {registrationNumber}</div>
                <div className="border-t border-dashed my-2"></div>
                <div className="flex items-center gap-6 my-3">
                    <span className='font-bold'>Availability</span>
                    <p className='px-4 py-1 rounded-3xl border-2 border-[#ffe5b8] text-[#ffa000] bg-[#fff6e6]'>Sunday</p>
                    <p className='px-4 py-1 rounded-3xl border-2 border-[#ffe5b8] text-[#ffa000] bg-[#fff6e6]'>MondaY</p>
                    <p className='px-4 py-1 rounded-3xl border-2 border-[#ffe5b8] text-[#ffa000] bg-[#fff6e6]'>Tuesday</p>
                </div>
                <div className="flex gap-8">
                    <span className='font-bold'>Consultation Fee:</span>
                    <p className='text-[#176ae5] font-extrabold'>Taka : 273  <span>(incl. Vat)</span> Per consultation</p>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default DetailsBox
