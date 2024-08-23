'use client'

import { useIndexOfSideBar } from '@/store/store'
import Dashbord from './(homePages)/dashboad/page'
import Upload from './(homePages)/upload/page'

const Home = () => {
  const {indexItem} =useIndexOfSideBar((state)=>state)
  console.log(indexItem);
  
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