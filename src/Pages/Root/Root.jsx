
import React from 'react'
import Header from '../../Components/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../Components/Footer/Footer'

const Root = () => {
  return (
    <div className="bg-[#efefef]">
        <div className='w-10/12 mx-auto '>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    </div>
  )
}

export default Root
