import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='w-full h-screen items-center text-center'>
        <h1 className='mb-4 text-[26px] font-bold'>Welcome to online consultation</h1>
        <div className='flex flex-col gap-4'>
            <Link to="/signin">
                <button className='border border-2 px-4 py-1'>Sign In</button>
            </Link>
            <Link to="/doctor/signup">
                <button className='border border-2 px-4 py-1'>Doctor Signup</button>
            </Link>
            <Link to="/patient/signup">
                <button className='border border-2 px-4 py-1'>Patient Signup</button>
            </Link>
        </div>
    </div>
  )
}

export default HomePage