import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/img1.svg'
import Contact from './Contact'
import Project from './Project'
import Skill from './Skill'
import About from './About'
import DownloadLink from "react-download-link";


export default function Home() {
  

  return (
    <div className=' w-full'>

        <div className=' grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1'>
            <div className='flex '>
              <div className=' pl-40 pt-40 lg:w-[700px] lg:pl-28 sm:w-[500px] md:w-[600px]'>
            <p className='text-6xl'>Hello, I'm Santhosh</p>
            <p className='text-6xl font-bold'><span className='text-blue-600 font-bold'>Front</span>end Developer</p>
            <p className='w-[600px] pt-8 lg:w-[550px] sm:w-[400px] md:w-[500px]'>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
            <button type='button' className=' bg-blue-600 hover:bg-white hover:text-blue-600 w-32 h-10 mt-5 rounded text-white duration-300 font-medium'>Read more</button>
            <button type='button' className='bg-green-500  hover:bg-white hover:text-green-500 w-48 h-10 mt-5 rounded text-white ml-5 duration-300 font-medium'>Download Resume</button>
            
            {/* <DownloadLink
    label="Save"
    filename="../assets/santhosh.pdf"
    exportFile={() => "My cached data"}  /> */}

        </div>
        </div>

        <div className='flex w-[600px] pt-12 lg:w-[600px]'>
          <img src={img1} alt="Profile" className='pl-28' />
        </div>
        </div>

        <Skill/>
        <Project/>
        <About/>
        <Contact/>
    </div>
  )
}
