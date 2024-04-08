import React from 'react'
import html from '../assets/Html.svg'
import tailwind from '../assets/Tailwind-CSS.svg'
import css from '../assets/CSS.svg'
import Javascript from '../assets/Javascript.svg'
import landingpage from '../assets/landingpage.png'
import amazon from '../assets/amazon.png'
import travelblog from '../assets/travelblog.png'
import iete from '../assets/Iete.png'
import { FaHandPointDown } from "react-icons/fa";


export default function Project() {
  return (
    <div id='project-id'>
       <div className='flex justify-center pt-10 sm:flex sm:text-center'>
      <h1 className='text-black font-bold text-xl tracking-widest border-solid border-4 border-black px-12 py-1'>PROJECTS</h1>
    </div>


    {/* <div className=''>
      <p className='text-2xl font-bold pl-10'>LANDING PAGE</p>

      <div className='grid grid-cols-4 mt-3'>
      <div className='flex bg-slate-800 w-52 h-10 justify-center ml-10 rounded'>
        <img src={html} alt="" className='w-10 h-10'/>
        <p className='text-xl text-white'>Html5</p>
    </div>
 
    <div className='flex bg-slate-800 w-52 h-10 justify-center ml-10 rounded'>
        <img src={tailwind} alt="" className='w-10 h-10'/>
        <p className='text-xl text-white'>Tailwind CSS</p>
    </div>

    <div className=''>
      <a href='https://landing-page-layouts.netlify.app' className= 'w-80 h-44 flex cursor-pointe'>
        <img src={landingpage} alt="" className='rounded-md hover:scale-110 duration-500' /></a>
        
        </div>

    </div>
    </div>

    
    <div className='mt-10'>
      <p className='text-2xl font-bold pl-10'>IETE Chennai</p>

      <div className='grid grid-cols-4 mt-3'>
      <div className='flex bg-slate-800 w-52 h-10 justify-center ml-10 rounded '>
        <img src={html} alt="" className='w-10 h-10'/>
        <p className='text-xl text-white'>Html5</p>
        <div className=''>
        <p className='text-white'>69.3%</p>
        </div>
    </div>

    <div className='flex bg-slate-800 w-52 h-10 justify-center ml-10 rounded'>
        <img src={css} alt="" className='w-10 h-10'/>
        <p className='text-xl text-white'>CSS</p>
        <p className='text-white'>24.9%</p>
    </div>



      <a href='https://subramaniyam2003.me/iete-chennai-centre.com/Home.html' className= ' flex cursor-pointer w-80 h-44'>
      <img src={iete} alt="iete" className='rounded-md hover:scale-110 duration-500' /></a>
    </div>
    </div> */}

    <div className='mt-10 shadow-xl ring-0 pb-3 mx-10 rounded-xl p-5'>
      <p className='text-2xl font-bold pl-10'>AMAZON PAGE</p>

      <div>
        <p className='indent-12 p-5 text-center'>Amazon is one of the world's largest online retailers, offering a wide range of products including electronics, clothing, furniture, books, toys, and more. The Amazon website serves as a platform for customers to browse, purchase, and review products from various sellers.</p>

        {/* <ol>
          <li>1. Search Bar: <p>A prominent search bar at the top of the page allows users to quickly search for products by keyword, product name, or category.</p></li>
          <li>2. Navigation Menu:<p> A comprehensive navigation menu organizes products into categories such as Electronics, Books, Clothing, and Home & Kitchen, making it easy for users to browse by their interests.</p></li>
          <li>3. Deal of the Day:<p>A section highlighting the daily deals and discounts available on select products.</p></li>
          <li>4. Recommended for You: <p>Personalized product recommendations based on the user's browsing and purchasing history.</p></li>
          <li>5. Footer Links:<p>Links to important pages such as Help, Careers, About Us, and more, providing additional information and resources for users.</p></li>
        </ol>
      */}

      </div>

      <div className='flex flow-row justify-center'>
      <a href='https://amazon-layout-page.netlify.app' className=' px-5 flex flex-col cursor-pointer w-96 h-52 text-blue-600 font-bold'>
      <div className='flex animate-pulse'>Click here to see project<FaHandPointDown  className='text-2xl animate-bounce ml-3 mt-2.5'/></div>
      <img src={amazon} alt="amazon" className='h-64 rounded-md hover:scale-x-110 duration-500' /></a>
      </div>

    </div>

    <div className='mt-10 p-5 shadow-xl ring-0 m-10 rounded-xl'>
      <p className='text-2xl font-bold pl-10'>PERSONAL TRAVEL BLOG </p>

      <div className=' mt-3 pb-3'>
        <p className='indent-12 p-5'> Keeping a travel blog will naturally give purpose to your  life. 
Most importantly, you'll have the opportunity to memorialise your adventures. 
A method to remember the people you've met, the experiences you've had, 
and the locations you've visited while exploring the world. A travel blog is a 
great way to share your personal experiences with others and inspire them to 
explore new places and cultures. </p>
      <ol>
        <li className='font-bold pl-5 pr-5 pb-5'>1. Home Page<p className='font-normal indent-12'>The home page is the first page visitors see when they access our website. It provides a brief overview of our organization and its mission. To update the home page content, locate the index.html file in the root directory. Update the relevant sections with the new content. Ensure that any images or media files are placed in the assets folder.  </p></li>
        <li className='font-bold pl-5 pr-5 pb-5'>2. About Us <p className='font-normal indent-12'>The "About Us" section provides detailed information about our organization, including its history, values, and team members. Navigate to the about folder and find the about.html file. Modify the content as needed. If you want to update team member information, go to the team subfolder and update the respective HTML files.</p></li>
        <li className='font-bold pl-5 pr-5 pb-5'>3. Services <p className='font-normal indent-12'>This section outlines the services we offer. Each service has its dedicated page with in-depth information.Each service has its own HTML file in the services folder. Locate the file corresponding to the service you want to update and modify the content accordingly.</p></li>
        <li className='font-bold pl-5 pr-5 pb-5'>4. Blog     <p className='font-normal indent-12'>Our blog is regularly updated with articles, news, and insights related to our industry. You can find the latest posts and search for specific topics. New blog posts can be added to the blog folder. Follow the naming convention for the HTML files and ensure that images or other media are stored in the assets folder.</p></li>
        <li className='font-bold pl-5 pr-5 pb-5'>5. Contact  <p className='font-normal indent-12'>The contact page includes our contact information and a contact form. Visitors can reach out to us directly through the form. To update contact information, open the contact.html file in the root directory. Update the details as necessary. Any changes to the contact form can be made in the associated JavaScript file located in the js folder</p></li>
      </ol>

      <div className='flex flex-row justify-center'>
      <a href='https://ibm-cloud-sample1.s3.che01.cloud-object-storage.appdomain.cloud/public.html' className= 'px-5 flex flex-col cursor-pointer w-96 h-64 text-blue-600 font-bold'>
      <div className='flex animate-pulse'>Click here to see project<FaHandPointDown  className='text-2xl animate-bounce ml-3 mt-2.5'/></div>
      <img src={travelblog} alt="amazon" className='h-64 rounded-md hover:scale-x-110 duration-500' /> </a>

    </div>
    </div>
    
    </div>
    </div>

  )
}
