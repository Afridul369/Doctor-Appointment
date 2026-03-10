

const DetailsBox = ({data,allschedule}) => {
    const {id,name, image,education,registrationNumber,schedule} = data 
    
  return (
    <div className='p-8 my-4 w-full'>
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
                    {allschedule.map(([day, time]) => (
                        <div key={day} className="flex items-center gap-1 justify-between p-2 rounded mb-2">
                        <p className='px-2 py-1 rounded-3xl border-2 border-[#ffe5b8] text-[#ffa000] bg-[#fff6e6]'>{day}</p>
                        <span className="text-green-500">{time}</span>
                        </div>
                    ))}
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
