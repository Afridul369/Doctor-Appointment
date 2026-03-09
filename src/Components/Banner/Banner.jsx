import Bannerimg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div>
        <div className="py-16 text-center bg-white rounded-3xl">
            <div className="px-64">
                <h1 className='text-5xl font-extrabold  leading-16'>Dependable Care, Backed by Trusted Professionals.</h1>
                <p className='mt-3'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div className="flex gap-10 my-5 mx-auto justify-center">
                    <label className="input w-150 rounded-3xl  ">
                        <input type="text" className="grow px-5 " placeholder="Search Any Doctor ..." />
                    </label>
                    <button className="btn btn-info bg-[#176ae5] rounded-3xl px-9 py-5 text-white">Search Now</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <img src={Bannerimg} alt=""  />
                    <img src={Bannerimg} alt=""  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
