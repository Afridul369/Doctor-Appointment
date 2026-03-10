import { GoPlusCircle } from 'react-icons/go'
import { Link, useRouteError } from 'react-router'

const DoctorNotFound = () => {
    const error = useRouteError()
    console.log(error.message)
  return (
    <div className='py-16 rounded-3xl bg-white text-center'>
        <div className="">
            <h1 className='text-3xl font-bold mb-5'>No Doctor Found !!</h1>
            <p className='text-gray-400 text-xl mb-4'>No Doctor Found With This Name</p>
            <div className="flex items-center gap-2 mb-6 justify-center">
                <GoPlusCircle size={25}/>
                <p className='text-black text-xl font-bold'>Name : {error?.message}</p>
            </div>
            <div className="flex justify-center">
            <Link to={'/'}>
                <button 
                className="btn btn-info bg-[#176ae5] rounded-xl px-9 py-5  text-white"
                >Go To Home</button>
            </Link>
        </div>
        </div>
      
    </div>
  )
}

export default DoctorNotFound
