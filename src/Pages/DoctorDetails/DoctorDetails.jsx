import { useLoaderData } from 'react-router'
import DetailsBox from '../../Components/DetailsBox/DEtailsBox'
import AppointmentBox from '../../Components/AppointmentBox/AppointmentBox'
import { useEffect, useState } from 'react'

const DoctorDetails = () => {
    const data = useLoaderData()
    // console.log(data)
    const {id,name, about,image,education,speciality,experience,registrationNumber} = data 
    const [allschedule, setAllSchedule] = useState([])
    useEffect(() => {
    fetch('/doctors.json')
      .then(res => res.json())
      .then(data => {

        const doctorSchedule = data.find(d => d.id === id)

        const availableDays = Object.entries(doctorSchedule.schedule)
          .filter(([day, time]) => time !== "Off")
        
        setAllSchedule(availableDays)
      })
  }, [])


  return (
    <div>
        <div className="py-18 my-16 bg-white text-center rounded-3xl">
            <h1 className='text-3xl font-extrabold'>Doctor’s Profile Details</h1>
            <p className='my-4 px-64'>{about}</p>
        </div>
        <DetailsBox allschedule={allschedule} data={data}></DetailsBox>
        <AppointmentBox allschedule={allschedule}></AppointmentBox>
    </div>
  )
}

export default DoctorDetails
