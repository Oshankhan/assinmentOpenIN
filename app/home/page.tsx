'use client'

import { useIndexOfSideBar } from '@/store/store'
import Dashbord from './(homePages)/dashboad/dashBoad'
import Upload from './(homePages)/upload/upload'

const Home = () => {
  const {indexItem} =useIndexOfSideBar((state)=>state)
  
  
  return (

    <>
    {(() => {
        switch (indexItem) {
          case 'Upload':
            return <Upload/>
          case 'Dashbord':
            return <Dashbord/>
          
        }
      })()}</>
  )
}

export default Home