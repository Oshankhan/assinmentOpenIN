'use client'
import React from 'react'
import ThemeToggler from './ThemeToggler'

const HeroPage = () => {
  return (
    <div className=' hidden md:flex md:items-center md:justify-center m-3 bg-[#605BFF]  rounded-md  '>
      <div className='bg-[#0C4E5F] w-[90%] h-[96%] bg-opacity-50 rounded-lg flex justify-between flex-col'>
        <div>
        <div className='rounded-2xl h-9 m-5  w-24 bg-white flex items-center'>
          <img src="./assets/Ellipse.png" alt="" className='h-5 w-5 m-2'/>
          <img src="./assets/Vector.png" alt="" className='w-6 relative right-7'/>
          <p className='font-extrabold relative right-5 text-black'>Base</p>

        </div>
          <div className='w-[82%]'>
          <h3 className='font-bold m-5 text-white text-5xl '>
          Generate detailed reports with just one click
          </h3>
          </div>
        </div>
        <div className='flex justify-between items-end '>
        <div className='relative left-6 bottom-7'>
        <ThemeToggler/>
        </div>
          <div className=' h-auto w-72'>
          
          <img src="./assets/heroImage.png"  alt="" />

        </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage