import { Link } from 'react-router'
import Logo from '../../assets/frame1.png'
import FB from '../../assets/fb.png'
import Twit from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'
import Yt from '../../assets/yt.png'

const Footer = () => {
  return (
    <div className=' py-24 px-60 bg-white'>
        <div className="px-106">
            <img src={Logo} alt="" />
        </div>
        <div className=" text-xl px-80 mt-8">
            <ul className='flex gap-8'>
              <li>Home</li>
              <li>My-Bookings</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
        </div>
        <div className="border-t border-dashed my-8"></div>
        <div className="flex gap-6 text-xl px-108 mt-3">
            <Link to={'https://www.facebook.com/md.abir.61087'}>
                <img src={FB} alt=""  />
            </Link>
            <Link>
                <img src={Twit} alt=""  />
            </Link>
            <Link>
                <img src={Linkedin} alt=""  />
            </Link>
            <Link>
                <img src={Yt} alt=""  />
            </Link>
        </div>
    </div>
  )
}

export default Footer