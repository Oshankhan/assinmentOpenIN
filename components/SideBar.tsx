'use client'
import { SideBarItems } from '@/utils/sideBar'
import React from 'react'
import ThemeToggler from './ThemeToggler'
import { useCollapse } from '@/store/store'
interface SideItems{
    id:string,
    icons:string,
    text:string
}
    

const SideBar = () => {
    const {isCollapse ,setCollapse} = useCollapse((state)=>state)
    

    
    const  handleCollapse=()=>{
        setCollapse(!isCollapse)
    }
  return (
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
                            
                            <img src={items.icons}  alt="" />
                            {!isCollapse&& (<p className='text-sm'>{items.text}</p>)}
                            
                        </button>
                })} 
            
        
        <div className='relative left-6'><ThemeToggler/></div>
    </div>
  )
}

export default SideBar