import React from 'react'
import { useLoaderData } from 'react-router'
import CollapstTab from '../../Components/CollapseTab/CollapstTab'

const Blogs = () => {
    const blog = useLoaderData()
    // console.log(blog)
  return (
    <div className='py-16 text-center'>
        <h1 className='text-black font-bold text-4xl mb-4'>Blogs</h1>
        <p className='text-base font-semibold mb-16'>Let's explore some basic concept that will make you a good developer</p>
        {
            blog.map(data=> <CollapstTab data={data} key={data.id}/>)
        }
    </div>
  )
}

export default Blogs