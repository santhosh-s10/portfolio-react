import React from 'react'
import {Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

        <nav className=' flex justify-around pt-2 xl:justify-evenly'>
            <h2 className='text-xl font-bold'>Welcome</h2>
            <p className=' hover:text-blue-500 duration-300 font-bold'><Link to="/">Home</Link></p>
            <p onClick={()=> window.location.replace('/#about-id')} className=' hover:text-blue-500 duration-300 font-bold cursor-pointer'>About Us</p>
            <p onClick={()=> window.location.replace('/#skill-id')} className=' hover:text-blue-500 duration-300 font-bold cursor-pointer'>Skills</p>
            <p onClick={()=> window.location.replace('/#project-id')} className=' hover:text-blue-500 duration-300 font-bold cursor-pointer'>Portfolio</p>
            <button type='button' onClick={()=> window.location.replace('/#contact-id')} className=' text-white bg-blue-500 w-32 h-9 hover:bg-white hover:text-blue-600 rounded ease-in duration-300 font-bold'>ContactUs</button>
            
        </nav>
    <Outlet/>
    </div>
  )
}
