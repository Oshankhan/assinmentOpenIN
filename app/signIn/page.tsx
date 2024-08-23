
import React, { useState } from 'react'
import HeroPage from '../../components/HeroPage'
import SignField from '../../components/SignField'

const SignInPage = () => {
  
  return (
    <div className={`flex justify-end h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text`}>
        <HeroPage />
        <SignField/>
    </div>
  )
}

export default SignInPage