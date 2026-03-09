import React, { useEffect, useState } from 'react'
import Doctor from '../Doctor/Doctor'

const BestDoctors = () => {
    const [doctors,setDoctors] = useState([])
    const [displayed,setDisplayed] = useState([])
    const [allShow,setAllShow] = useState([])
    useEffect(()=>{
        fetch('doctors.json').then((res)=> res.json()).then(data=> 
            {setDoctors(data)
             setDisplayed(data.slice(0,6))
            })
    },[])
    const handleShow = ()=>{
        setDisplayed(doctors)
    }

  return (
    <div>
        <div className="py-20 ">
            <div className="text-center">
                <h1 className='font-extrabold text-4xl mb-4'>Our Best Doctors</h1>
                <p className='px-80 mb-6'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    displayed.map(doctor=> <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
            <div className="pt-12  flex justify-center">
                <button 
                onClick={handleShow}
                className="btn btn-info bg-[#176ae5] rounded-3xl text-2xl px-12 py-7 text-white"
                >View All Doctors</button>
            </div>
        </div>
    </div>
  )
}

export default BestDoctors
