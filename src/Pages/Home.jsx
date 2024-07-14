import React from 'react'
import Contact from './Contact'
import Project from './Project'
import Skill from './Skill'
import About from './About'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import resume from '../assets/Resume.pdf'
import myprofile from '../assets/profile.png'


export default function Home() {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer'],
    loop: {},
    Cursor ,
    typeSpeed: 150,
    delaySpeed: 1000,
    deleteSpeed:50,
    
  });

  return (


    <div className=' w-full'>

        <div className=' grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1'>
            <div className='flex '>
              <div className=' pl-40 pt-40 lg:w-[700px] lg:pl-28 sm:w-[500px] md:w-[600px]'>
            <p className='text-4xl font-bold '>Hello, It's me <br /> <span className='font-bold text-6xl'> Santhosh</span></p>
            <p className='text-4xl font-bold '>And I'm <span className='text-blue-600 font-bold text-6xl'>{text}</span></p>
            <p className=' w-[600px] pt-8 lg:w-[550px] sm:w-[400px] md:w-[500px]'>Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.</p>
            <a href="/">
              <button type='button' className=' bg-blue-600 hover:bg-white hover:text-blue-600 w-32 h-10 mt-10 rounded text-white duration-500 font-medium'>Read more</button>
            </a>
            <a href={resume} download='MyResume' target='_blank'>
              <button type='button' className='bg-green-500  hover:bg-white hover:text-green-500 w-48 h-10 mt-10 rounded text-white ml-5 duration-500 font-medium'>Download Resume</button>
            </a>

        </div>
        </div>

        <div className='flex w-[600px] pt-12 lg:w-[600px]'>
          <img src={myprofile} alt="Profile" className='pl-28 animate-pulse' />
        </div>
        </div>

        <About/>
        <Skill/>
        <Project/>
        <Contact/>
    </div>
  )
}
