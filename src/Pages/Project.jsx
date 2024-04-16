import React from 'react'
import amazon from '../assets/amazon-2.png'
import travelblog from '../assets/travel.jpg'
import { FaHandPointDown } from "react-icons/fa";

export default function Project() {
  return (
    <div id='project-id'>
       <div className='flex justify-center pt-10 sm:flex sm:text-center'>
      <h1 className='text-black font-bold text-xl tracking-widest border-solid border-4 border-black px-12 py-1'>PROJECTS</h1>
    </div>

    <div className='grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'> 

        <div className='bg-amber-50 mt-10 shadow-xl ring-0 pb-3 mx-10 rounded-xl p-5 w-96 h-96'>
          <div className=' flex flex-col justify-center'>
          <img src={amazon} alt="amazon" className='rounded-md hover:scale-x-110 duration-500 h-64 px-5' />
          <p className='text-2xl font-bold text-center p-2'>AMAZON PAGE</p>
          <div className='grid grid-cols-2'>
            <a href="https://github.com/santhoshpandy/Santhosh-CodeBoosters-Internship/">
            <button className='bg-transparent border ring-2 rounded-full w-32 h-7 ring-black hover:bg-black hover:text-white duration-500'>Github</button></a>
            <a href="https://amazon-layout-page.netlify.app">
              <button className='bg-transparent border ring-2 rounded-full w-32 h-7 ring-black hover:bg-black hover:text-white duration-500'>Live Demo</button></a>
            </div> 
          </div>
        </div>

        <div className='bg-amber-50 mt-10 shadow-xl ring-0 pb-3 mx-10 rounded-xl p-5 w-96 h-96'>
          <div className=' flex flex-col justify-center'>
          <img src={travelblog} alt="amazon" className='rounded-md hover:scale-x-110 duration-500 h-64' />
          <p className='text-2xl font-bold text-center p-2'>PERSONAL TRAVEL BLOG</p>
          <div className='grid grid-cols-2'>
            <a href="https://github.com/santhoshpandy/Personal-travel-blog/">
              <button className='bg-transparent border ring-2 rounded-full w-32 h-7 ring-black hover:bg-black hover:text-white duration-500'>Github</button></a>
            <a href="https://ibm-cloud-sample1.s3.che01.cloud-object-storage.appdomain.cloud/public.html">
              <button className='bg-transparent border ring-2 rounded-full w-32 h-7 ring-black hover:bg-black hover:text-white duration-500'>Live Demo</button></a>
            </div> 
          </div>
          </div>

    </div>
    </div>

  )
}
