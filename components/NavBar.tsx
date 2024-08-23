'use client'
import { useCollapse } from '@/store/store';
import React from 'react'
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const {setCollapseMobile ,isCollapseMobile}= useCollapse((state)=>state)
  
  return (
    <div className='flex items-center px-10 pt-4 justify-between  mb-20 '>
        <button onClick={()=>setCollapseMobile(!isCollapseMobile)}> <div className='md:hidden block'><FaBars size={18} /></div></button>
        <p className='text-2xl'>Upload CSV</p>

        <div className='flex space-x-4 items-center'>
        <img src="./icons/bell.png " className='h-[23px] w-[18px] ' alt="" />
        <div className='w-[30px] h-[30px] rounded-full bg-cover bg-center' style={{ backgroundImage: "url('/assets/profile.png')" }}>
</div>

        </div>
        
    </div>
  )
}

export default NavBar