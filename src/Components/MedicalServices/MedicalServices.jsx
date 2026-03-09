import cardImg from '../../assets/success-doctor.png'
import cardImg2 from '../../assets/success-review.png'
import cardImg3 from '../../assets/success-patients.png'
import cardImg4 from '../../assets/success-staffs.png'
import ServiceCard from '../ServiceCard/ServiceCard'
import CountUp from 'react-countup'


const MedicalServices = () => {
  
  // const cardImages = [cardImg,cardImg2,cardImg3,cardImg4]
  const cardData = [
  { id: 1, value: 350, label: "Total Doctors", image: cardImg },
  { id: 2, value: 2500, label: "Total Reviews", image: cardImg2 },
  { id: 3, value: 5000, label: "Total Patients", image: cardImg3 },
  { id: 4, value: 620, label: "Total Staffs", image: cardImg4 }
]

  return (
    <div className='py-10'>
        <div className="">
          <div className="text-center">
            <h1 className='font-extrabold text-5xl mb-4'>We Provide Best Medical Services</h1>
          <p className='mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {
                cardData.map((card)=> <ServiceCard key={card.id} card={card}></ServiceCard>)
              }
          </div>

        </div>
    </div>
  )
}

export default MedicalServices
