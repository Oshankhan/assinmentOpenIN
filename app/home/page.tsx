'use client'
import FileDropArea from '@/components/FileDropArea'
import React, { useState } from 'react'
import UploadCSV from './components/UploadCSV'
import Uploads from './components/Uploads'

const Home = () => {

  return (

    <div className='h-full w-full bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex-col justify-center items-center flex'>
      <UploadCSV/>
      <Uploads/>
    </div>
  )
}

export default Home