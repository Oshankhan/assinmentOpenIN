import FileDropArea from '@/components/FileDropArea'
import React from 'react'

const UploadCSV = () => {
  return (
    
  <div className='flex-col mb-10 flex w-[90%] md:w-[60%] h-[367px]  bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text justify-center items-center p-10 rounded-lg'>
    <FileDropArea/>
  </div>
  )
}

export default UploadCSV