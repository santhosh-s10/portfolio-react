import React from 'react'
import aboutme from '../assets/About Me.svg'
import Contact from './Contact'
import school from '../assets/school.jpg'
import college from '../assets/college.jpg'
import anime from 'animejs'

export default function About() {
  anime({
    targets: '.staggering-grid-demo .el',
    scale: [
      {value: 1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [2,2], from: 'center'}) 
  });



  return (
    <div id='about-id' className=''>
       <div className='flex justify-center pt-10 sm:flex sm:text-center'>
      <h1 className='text-black font-bold text-xl tracking-widest border-solid border-4 border-black px-12 py-1'>ABOUT ME</h1>
    </div>

    <div className='staggering-grid-demo place-items-center gap-5 mt-5 grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 sm:mx-10'>
      <div className='el bg-amber-50 rounded-lg shadow-xl ring-0 p-3'>
        <img src={school} alt="Aboutme" className='w-[900px] h-64 lg:w-[500px] md:w-[400px] sm:w-[300px] rounded-lg' />
        <div className=' bg- flex flex-col justify-center rounded-lg m-2.5 mt-5  '>
          <p className='text-center font-bold text-lg text-blue-800'>SSLC</p>
          <p className='text-center font-bold'>Government Model School</p>
          <p className='text-center font-bold percent-class'>Percentage : 83.4%</p>
        </div>
      </div>

      <div className='el bg-amber-50 rounded-lg shadow-xl ring-0 p-3'>
        <img src={school} alt="Aboutme" className='w-[900px] h-64 lg:w-[500px] md:w-[400px] sm:w-[300px] rounded-lg' />
        <div className=' bg- flex flex-col justify-center rounded-lg m-2.5 mt-5  '>
          <p className='text-center font-bold text-lg text-blue-800'>HSC</p>
          <p className='text-center font-bold'>Government Model School</p>
          <p className='text-center font-bold'>Percentage : <span>86.39%</span></p>
        </div> 
      </div>

      <div className='el bg-amber-50 rounded-lg shadow-xl ring-0 p-3'>
        <img src={college} alt="Aboutme" className='w-[900px] h-64 lg:w-[500px] md:w-[400px] sm:w-[300px] rounded-lg' />
        <div className=' bg- flex flex-col justify-center rounded-lg m-2.5 mt-5  '>
          <p className='text-center font-bold text-lg text-blue-800 sm:w-[250px] md:w-[400px]'>COMPUTER SCIENCE AND ENGINEERING</p>
          <p className='text-center font-bold'>Builders Engineering College</p>
          <p className='text-center font-bold'>CGPA : 7.57 (upto 5th Semester)</p>
        </div>
      </div>

      <div className='bg-green-200'>
      </div>
        </div>
    
    </div>
  )
}
