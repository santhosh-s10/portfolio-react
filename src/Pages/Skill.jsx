import React from 'react'
import html from '../assets/Html.svg'
import css from '../assets/CSS.svg'
import figma from '../assets/figma.svg'
import Javascript from '../assets/Javascript.svg'
import react from '../assets/react.svg'
import bootstrap from '../assets/bootstrap.svg'
import tailwind from '../assets/Tailwind-CSS.svg'
import flutter from '../assets/flutter.svg'
import nodejs from '../assets/Nodejs.svg'
import typescript from '../assets/Typescript.svg'
import mongodb from '../assets/mongodb.svg'
import python from '../assets/Python.svg'
import c from '../assets/C.svg'
import java from '../assets/Java.svg'
import anime from 'animejs/lib/anime.es.js';


export default function Skill() {
  anime({
    targets: '.staggering-grid-demo .el',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [1,0], from: 'center'}) 
  });


  return (
    <div id='skill-id'>
      <div className='flex justify-center pt-10 sm:flex sm:text-center'>
      <h1 className='text-black font-bold text-xl tracking-widest border-solid border-4 border-black px-12 py-1'>SKILLS</h1>
    </div>
    <div className='flex pb-5'>
      <p className='text-xl tracking-widest font-bold pl-10'>USING NOW:</p>
    </div>

    <div className='staggering-grid-demo grid grid-rows-2 grid-cols-4 gap-10 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-col-1'>
      <div className='el html-class flex flex-col'>
        <img src={html} alt="Html5" className=' h-20' />
        <p className='text-center pt-3'>HTML5</p>
        </div>

      <div className='el flex flex-col'>
        <img className='h-20' src={css} alt="" />
        <p className='text-center pt-3'>CSS3</p>
      </div>

      <div className='el flex flex-col'>
        <img className='h-20' src={Javascript} alt="" />
         <p className='text-center pt-3'>JAVASCRIPT</p>
      </div>

      <div className='el flex flex-col'>
        <img className='h-20' src={react} alt="" /> 
        <p className='text-center pt-3'>REACT</p>
      </div>

      <div className='el flex flex-col'>
        <img className='h-20' src={tailwind} alt="" /> 
         <p className='text-center pt-3'>TAILWIND CSS</p>
      </div>

      <div className='el flex flex-col'>
        <img className='h-20' src={figma} alt="" /> 
        <p className='text-center pt-3'>FIGMA</p>
      </div>

      <div className='el flex flex-col'>
        <img className='h-20' src={bootstrap} alt="" />
         <p className='text-center pt-3'>BOOTSTRAP</p>
      </div>

      <div className='el flex flex-col'>
        <img className='h-20' src={flutter} alt="" />
         <p className='text-center pt-3'>FLUTTER</p>
      </div>
     </div>


    {/* ---------Learning Section ---------- */}

    <div>
      <p className='text-xl tracking-widest font-bold pt-5 pl-10'>LEARNING:</p>
    </div>

    <div className='grid grid-cols-3 pt-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-col-1'>
    <div className=' flex flex-col'>
        <img src={nodejs} alt="Html5" className=' h-20' />
        <p className='text-center pt-5'>NODE JS</p>
        </div>

        <div className=' flex flex-col'>
        <img src={mongodb} alt="Html5" className=' h-20' />
        <p className='text-center pt-5'>MONGO DB</p>
        </div>

        <div className=' flex flex-col'>
        <img src={typescript} alt="Html5" className=' h-20' />
        <p className='text-center pt-5'>TYPESCRIPT</p>
        </div>

    </div>

    {/* -------Others Section-------- */}

    <div>
      <p className='text-xl tracking-widest font-bold pt-5 pl-10'>OTHER SKILLS:</p>
    </div>

    <div className='grid grid-cols-3 pt-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-col-1'>
    <div className=' flex flex-col'>
        <img src={python} alt="Html5" className=' h-20' />
        <p className='text-center pt-5'>PYTHON</p>
        </div>
        <div className=' flex flex-col'>
        <img src={c} alt="Html5" className=' h-20' />
        <p className='text-center pt-5'>C</p>
        </div>
        <div className=' flex flex-col'>
        <img src={java} alt="Html5" className=' h-20' />
        <p className='text-center pt-5'>JAVA</p>
        </div>
    </div>

    </div>
  )
}
