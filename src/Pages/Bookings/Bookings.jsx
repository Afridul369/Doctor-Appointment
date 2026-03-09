import React from 'react'
import { Link } from 'react-router'

const Bookings = () => {
  return (
    <div className='py-20 '>
        <div className="text-center">
            <h1 className='font-extrabold text-4xl mb-4'>You Have Not Booked Any Appointment</h1>
            <p className='px-80 mb-6'>Our platform connects you with verified, experienced doctors across various specialties.</p>
        </div>
        <div className="flex justify-center">
            <Link to={'/'}>
                <button 
                className="btn btn-info bg-[#176ae5] rounded-2xl px-9 py-5  text-white"
                >Book An Appointment</button>
            </Link>
        </div>
    </div>
  )
}

export default Bookings
