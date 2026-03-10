import { useLoaderData } from 'react-router'
import DetailsBox from '../../Components/DetailsBox/DEtailsBox'
import AppointmentBox from '../../Components/AppointmentBox/AppointmentBox'

const DoctorDetails = () => {
    const data = useLoaderData()
    // console.log(data)
    const {id,name, about,image,education,speciality,experience,registrationNumber} = data 
    


  return (
    <div>
        <div className="py-18 my-16 bg-white text-center rounded-3xl">
            <h1 className='text-3xl font-extrabold'>Doctor’s Profile Details</h1>
            <p className='my-4 px-64'>{about}</p>
        </div>
        <DetailsBox data={data}></DetailsBox>
        <AppointmentBox></AppointmentBox>
    </div>
  )
}

export default DoctorDetails
