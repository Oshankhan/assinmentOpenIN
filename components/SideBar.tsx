'use client'
import { SideBarItems } from '@/utils/sideBar'
import React from 'react'
import ThemeToggler from './ThemeToggler'
import { useCollapse } from '@/store/store'
interface SideItems{
    id:string,
    icons:React.JSX.Element,
    text:string
}
import { IoMdClose } from "react-icons/io";
    

const SideBar = () => {
    const {isCollapse ,setCollapse,isCollapseMobile,setCollapseMobile} = useCollapse((state)=>state)
    

    const  handleCollapse=()=>{
        setCollapse(!isCollapse)
    }
    const  handleCollapseMobile=()=>{
        setCollapseMobile(!isCollapseMobile)
    }
    
    
  return (
    <>
        <div  className={`h-full ${isCollapse?"w-[154px]":"w-[285px]"} bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text hidden md:block ` }>
            
        <div className='dashboad__Heading flex items-center justify-around h-10 mt-[51px]'>
            <div >
            <img src="./assets/Ellipse.png "className='w-9 ' alt="" />
            <img src="./assets/Vector.png" alt=""  className='w-9 absolute top-[65px]'/>
            </div>
            {!isCollapse&&(<p className='text-xl font-bold'>Base</p>)}
            <button onClick={handleCollapse}>
            <img src="./icons/tabler-icon-layout-sidebar-left-expand.png" alt="" />
            </button>
        </div>
        
            
                {SideBarItems?.map((items:SideItems)=>{
                        return <button  className={`cursor-pointer flex space-x-4 */- items-center my-10 mx-5 ${isCollapse?"justify-center":""}`} key={items.id}>
                            
                            <div >{items.icons}</div>

                            {!isCollapse&& (<p className='text-sm'>{items.text}</p>)}
                            
                        </button>
                })} 
            
        
        <div className='relative left-6'><ThemeToggler/></div>
    </div>
        

        <div className={`w-full h-full  bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text absolute rounded-r-2xl ${isCollapseMobile?"hidden":"block"}`}>
        <div className='dashboad__Heading flex items-center justify-around h-10 mt-[51px]'>
            <div className='flex items-center space-x-6'><div >
            <img src="./assets/Ellipse.png "className='w-9 ' alt="" />
            <img src="./assets/Vector.png" alt=""  className='w-9 absolute top-[65px]'/>
            </div>
            {!isCollapseMobile&&(<p className='text-xl font-bold'>Base</p>)}</div>
            <button onClick={handleCollapseMobile}>
            <p className='font-extrabold'><IoMdClose size={18} color='grey'/></p>
            </button>
        </div>
                <div >
                {SideBarItems?.map((items:SideItems)=>{
                        return <button  className={`cursor-pointer flex space-x-8 pl-10 */- items-center my-10 mx-5 ${isCollapse?"justify-center":""}`} key={items.id}>
                            
                            <div>{items.icons}</div>
                            <p className='text-sm'>{items.text}</p>
                            
                            
                        </button>
                })} 
                </div>
        </div>

    </>
  )
}

export default SideBar