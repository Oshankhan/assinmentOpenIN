"use client"
import React, { FormEvent, useState } from 'react'

const SignField = () => {
    const [loginDetials, setloginDetials] = useState({
        name:"",
        password:""
    })
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
    }
    const handleForgetPassword=()=>{

    }

  return (
    <div className='flex flex-col  h-[80%] items-center justify-between '>
            <div className='flex h-full w-[100vw] md:w-[50vw] flex-col  items-center  pt-20  px-10 ' >
                <div className='flex flex-col items-start justify-evenly'>
                <p className='text-3xl font-extrabold '>
                Sign In 
                </p>
                <p className='text-base font-bold py-1'>
                Sign in your account
                </p>
            <div className='flex space-x-4 mb-6 mt-4'>
                <button className='flex items-center  justify-center space-x-3 p-2 rounded-md bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text'>
                    <img src="./icons/googleIcon.png" alt="Google Icon" />
                    <p className='text-xs '>Sign in with google</p>
                </button>
                    <button className='flex items-center  justify-center space-x-3 p-2 rounded-md bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text'>
                    <img src="./icons/appleIcon.png" alt="Google Icon" />
                <p className='text-xs'>Sign in with apple</p>
                </button>
            </div>
            <div className='p-4 w-full bg-light-primary dark:bg-dark-primary rounded-lg'>
                <form onSubmit={handleSubmit} className='flex flex-col items-start '>
                <label htmlFor="" className='text-base font-bold my-2  text-light-text dark:text-dark-text'>
                Email address
            </label>
            
            <input type="text" placeholder="Email" className='bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text placeholder-light-text dark:placeholder-dark-text focus:outline-none'/>

            <label htmlFor="" className='text-base font-bold my-2  text-light-text dark:text-dark-text'>Password</label>
            <input type="password" placeholder='Password'  className='bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text placeholder-light-text dark:placeholder-dark-text focus:outline-none'/>
            <a href="" className='my-2'>Forgot Password</a>
            <button type='submit' className='w-full h-[30px] bg-[#605BFF] rounded-md text-sm font-semibold mb-3'>Sign In</button>
            </form>
            
            </div>
           
           

            <div className='ml-8 m-4 flex items-center'>
                <p className='text-sm'>Don't have an account? &nbsp;</p>
                <a href="/"> Register here</a>
            </div>

                </div>
            
            </div>
        <div className='w-44 h-10'>
            <img src="./assets/Frame.png" alt="" />
        </div>

    </div>
  )
}

export default SignField