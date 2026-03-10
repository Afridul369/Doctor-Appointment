import Logo from "../../assets/frame1.png";
import { Link, NavLink } from "react-router";


const Header = () => {
  return (
    <div className="navbar py-3 mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2  shadow"
          >
            <NavLink to={"/"}>
                <li  className="mr-10 px-3 py-2 border-2 rounded-sm duration-200 border-transparent hover:border-[#176ae5] hover:text-[#176ae5] ">
                    Home
                </li>
            </NavLink>
            <NavLink to={"/bookings"}>
                <li  className="active mr-10 px-3 py-2 border-2 rounded-sm duration-200 border-transparent hover:border-[#176ae5] hover:text-[#176ae5] ">
                    My-bookings
                </li>
            </NavLink>
            <li  className="mr-10 px-3 py-2 border-2 rounded-sm duration-200 border-transparent hover:border-[#176ae5] hover:text-[#176ae5] ">
              Blogs
            </li>
            <li  className="mr-10 px-3 py-2 border-2 rounded-sm duration-200 border-transparent hover:border-[#176ae5] hover:text-[#176ae5] ">
              Contact Us
            </li>
          </ul>
        </div>
        <button><img src={Logo} alt=""  /></button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to={'/'}>
            <li className="mr-10 px-3 py-2 border-2 rounded-sm duration-200 border-transparent hover:border-[#176ae5] hover:text-[#176ae5] ">
                Home
            </li>
          </NavLink>
          <NavLink to={"/bookings"}>
              <li className="mr-10 px-3 py-2 border-2 rounded-sm duration-200 border-transparent hover:border-[#176ae5] hover:text-[#176ae5] ">
                  My-Bookings
            </li>
          </NavLink>
          <NavLink to={'/blogs'}>
            <li className="mr-10 px-3 py-2 border-2 rounded-sm duration-200 border-transparent hover:border-[#176ae5] hover:text-[#176ae5] ">
              Blogs
            </li>
          </NavLink>
          <li className="mr-10 px-3 py-2 border-2 rounded-sm duration-200 border-transparent hover:border-[#176ae5] hover:text-[#176ae5] ">
              Contact Us
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-3 ">
        <button className="btn btn-info bg-[#176ae5] rounded-3xl px-10 py-6 text-white">Emergency</button>
      </div>
    </div>
  );
};

export default Header;