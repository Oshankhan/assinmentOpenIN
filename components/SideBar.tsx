'use client'
import { SideBarItems } from '@/utils/sideBar'
import React, { useState } from 'react'
import ThemeToggler from './ThemeToggler'
import { useCollapse, useIndexOfSideBar } from '@/store/store'
import { IoMdClose } from "react-icons/io";

interface SideItems {
  id: string,
  icons: React.ElementType,
  text: string
}

const SideBar = () => {
  const { setIndexItem } = useIndexOfSideBar()
  const { isCollapse, setCollapse, isCollapseMobile, setCollapseMobile } = useCollapse((state) => state)
  
  
  const [selectedItem, setSelectedItem] = useState<string>(SideBarItems[0]?.text || '');

  const handleCollapse = () => {
    setCollapse(!isCollapse)
  }

  const handleCollapseMobile = () => {
    setCollapseMobile(!isCollapseMobile)
  }

  const handleIndexClick = (index: string): void => {
    setSelectedItem(index);
    setIndexItem(index)
  }

  return (
    <>
      <div className={`h-full ${isCollapse ? "w-[154px]" : "w-[285px]"} bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text hidden md:block`}>
        <div className='dashboad__Heading flex items-center justify-around h-10 mt-[51px]'>
          <div>
            <img src="./assets/Ellipse.png" className='w-9' alt="" />
            <img src="./assets/Vector.png" alt="" className='w-9 absolute top-[65px]' />
          </div>
          {!isCollapse && (<p className='text-xl font-bold'>Base</p>)}
          <button onClick={handleCollapse}>
            <img src="./icons/tabler-icon-layout-sidebar-left-expand.png" alt="" />
          </button>
        </div>

        {SideBarItems?.map((items: SideItems, index: number) => (
          <button
            key={items.id}
            onClick={() => handleIndexClick(items.text)}
            className={`cursor-pointer relative p-4 w-full h-10 flex space-x-4 items-center my-10 mx-5  ${selectedItem === items.text ? "bg-gradient-to-r from-[#635fce] to-transparent opacity-20 dark:text-dark-text" : ""}`}
          >
            <div className={`relative z-10 ${selectedItem === items.text ? "text-black" : "text-current"}`}><items.icons size={28} color={selectedItem===items.text?"#4b489d":"grey"}/></div>
            {!isCollapse && (<p className='text-sm'>{items.text}</p>)}
          </button>
        ))}
        <div className='relative left-6'><ThemeToggler /></div>
      </div>

      <div className={`w-full h-full bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text absolute rounded-r-2xl ${isCollapseMobile ? "hidden" : "block"}`}>
        <div className='dashboad__Heading flex items-center justify-around h-10 mt-[51px]'>
          <div className='flex items-center space-x-6'>
            <div>
              <img src="./assets/Ellipse.png" className='w-9' alt="" />
              <img src="./assets/Vector.png" alt="" className='w-9 absolute top-[65px]' />
            </div>
            {!isCollapseMobile && (<p className='text-xl font-bold'>Base</p>)}
          </div>
          <button onClick={handleCollapseMobile}>
            <p className='font-extrabold'><IoMdClose size={18} color='grey' /></p>
          </button>
        </div>
        <div>
          {SideBarItems?.map((items: SideItems) => (
            <div key={items.id} onClick={() => handleIndexClick(items.text)} className='items-center'>
              <button className={`cursor-pointer flex space-x-8 pl-10 items-center my-10 mx-5 ${isCollapse ? "justify-center" : ""} ${selectedItem === items.text ? "bg-gradient-to-r from-[#ACA9FF] to-transparent opacity-20" : ""}`}>
                {<items.icons size={28}/>}
                <p className='text-base light:text-dark-text dark:text-dark-text'>{items.text}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SideBar
