import React from 'react'
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillBehanceCircle } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaAngleDoubleUp } from "react-icons/fa";



export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// function Validate(form)
// {
//   var fullName = form.FullName.value;
//   if(fullName.length == 0)
//   {
//     alert('Enter Fullname');
//   }
// }


  return (
    <div id='contact-id' className=''>
        <div className='flex justify-center pt-10 sm:flex sm:text-center'>
      <h1 className='text-black font-bold text-xl tracking-widest border-solid border-4 border-black px-12 py-1'>CONTACT</h1>
    </div>

  
    <div className='w-[1170px] h-[359px] mx-36  grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1' >
    
        
        <div className='flex flex-col pt-10 '>
            <p className='text-3xl font-bold'>Let's get in touch!</p>
            <div className='flex-row flex pt-10'>
                <TbPhoneCall className='text-green-400 text-2xl '/>
                <p className='pl-2'>9629945298</p>
            </div>
            
            <div className='flex flex-row pt-5'>
                <MdOutlineMail className='text-green-400 text-2xl '/>
                <p className='pl-2'>1012santhosh@gmail.com</p>
            </div>

            <div className='mt-10 '>
                <p className='text-xl font-bold'>Connect with us</p>
                <div className='grid grid-cols-4 gap-5 pt-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 sm:w-[400px] md:w-[400px] xs:grid-cols-1'>
                <Link to='https://www.linkedin.com/in/santhosh-s-b51939287/'><CiLinkedin className='text-3xl cursor-pointer hover:text-green-500'/></Link>
                <Link to='https://github.com/santhoshpandy/'><FaGithub className='text-3xl cursor-pointer hover:text-green-500'/></Link>
                <FaSquareXTwitter className='text-3xl cursor-pointer hover:text-green-500' />
                <FaInstagram className='text-3xl cursor-pointer hover:text-green-500  '/>
                </div>
            </div>
            
          
        </div>

        <form action='' method='' className='flex flex-col pt-32 '>
            <div className='relative'>
              <IoPerson className='absolute top-2 left-3 text-2xl text-green-400' />
               <input type="text" name='FullName' className='placeholder-black ring-2 ring-gray-400 border-r-2 w-96 h-10 pl-12' placeholder='Full Name' required/>
            </div>
            <div className='relative mt-5'>
                <MdOutlineMail className=' absolute top-2 left-3 text-green-400 text-2xl'/>
                <input type="email" name='Email' className='placeholder-black ring-2 ring-gray-400 w-96 h-10 pl-12' id="123" placeholder='Email' required/>
            </div>
            <button type='submit'  className='bg-green-600 w-32 h-10 mt-10 text-white hover:text-green-500 hover:bg-white rounded-xl duration-700 hover:shadow-green-500 shadow-lg' >Submit</button>
        </form>
    </div>

      <div className='bg-gray-900 h-64 md:mt-80 sm:mt-96 xs:mt-[200px] relative'>
             <div className='flex justify-center gap-5 pt-20'>
                <FaFacebook className='text-white text-3xl cursor-pointer hover:text-green-500 '/>
                <FaYoutube className='text-white text-3xl cursor-pointer hover:text-green-500' />
                <AiFillBehanceCircle className='text-white text-3xl cursor-pointer hover:text-green-500 '/>
                <FaGoogle className='text-white text-3xl cursor-pointer hover:text-green-500' />

                </div>

                <p className='text-white text-center pt-10'>© 2024 Portfolio Landing Website </p>
                <FaAngleDoubleUp onClick={scrollToTop} alt="Toparrow" className='w-10 h-10 text-white rounded-full absolute right-10 cursor-pointer animate-pulse'/>            

            </div>
    </div>
  )
}
