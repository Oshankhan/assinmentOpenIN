import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import React from 'react'

const homeLayOut = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='flex h-screen'>
  <SideBar /> 
  <div className='flex flex-col w-full h-full'>
    <NavBar />
    <div className='flex w-full h-full'>
      {children}
    </div>
  </div>
</div>

  )
}

export default homeLayOut