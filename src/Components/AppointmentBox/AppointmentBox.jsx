import React, { useEffect, useState } from 'react'
import { BsExclamationSquare } from 'react-icons/bs'

const AppointmentBox = ({allschedule}) => {
      const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
      const [available,setAvailable] = useState([])
      const [isTodayAvailable, setIsTodayAvailable] = useState(false)
      // console.log(available)
      useEffect(()=>{
        const mismatch = allschedule.filter(([day])=> day !== today )
        setAvailable(mismatch)
        const todayExists = allschedule.some(([day]) => day === today)
        setIsTodayAvailable(todayExists)
      },[])
      
  return (
    <div className='my-12 p-8 bg-white rounded-3xl'>
        <h1 className='text-2xl font-extrabold text-center'>Book an Appointment</h1>
        <div className="border-t border-dashed border-[#0F0F0F20] my-5"></div>
        <div className="flex justify-between">
            <p className='font-bold'>Availability</p>
            {isTodayAvailable ?
              <p className='px-3 rounded-2xl border border-[#5bbb75] bg-[#e6f5ea] text-[#5bbb75]'
              >Doctor Available Today</p> : <p className='px-3 rounded-2xl border  border-red-500  bg-red-200 text-red-500'>Not Available Today</p>  
            }
        </div>
        <div className="border-t  my-5 border-[#0F0F0F20]"></div>
        <div 
        className="py-2 flex gap-4 items-center justify-center px-6 rounded-3xl border-2 border-[#ffe5b8] text-[#ffa000] bg-[#fff6e6]"
        ><BsExclamationSquare /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
        </div>
        <button 
        className='btn py-6 w-full bg-[#176ae5] text-white text-xl font-bold rounded-3xl my-8 cursor-pointer'
        >Book Appointment Now</button>
    </div>
  )
}

export default AppointmentBox
