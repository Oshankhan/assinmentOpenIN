'use client'

import { useIndexOfSideBar } from '@/store/store'
import Dashbord from './(homePages)/dashboad/page'
import Upload from './(homePages)/upload/page'

const Home = () => {
  const {indexItem} =useIndexOfSideBar((state)=>state)
  return (

    <>
    {(() => {
        switch (indexItem) {
          case 'Dashbord':
            return <Dashbord/>
          case 'Upload':
            return <Upload/>
          default:
            return <Dashbord/>
        }
      })()}</>
  )
}

export default Home