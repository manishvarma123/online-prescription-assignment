import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DoctorProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [data, setData] = useState({});

  useEffect(() => {
    setData({ ...user.data })
    console.log(data);
  }, {})



  return (

    <>
      <div className='w-full min-h-screen bg-slate-300 px-3 py-8 flex justify-center'>
        <div className='w-full max-w-[600px] h-full'>
          <div className='mt-8 bg-white px-8 pb-8 rounded-md'>
            <div className='flex flex-row-reverse'>
              <Link to='/doctor/prescription_page'>
                <button className='bg-blue-500 text-white px-2 py-1.5 w-full mx-auto mt-6 rounded-sm'>Prescription Page</button>
              </Link>
            </div>
            <div className='w-full '>
              <h2 className='text-[20px] font-bold mb-[20px]'>Doctor Profile</h2>
              <div className='flex flex-col gap-4 text-[17px]'>
                <h2>Name : <span className='font-semibold'>Dr. {data.name}</span></h2>
                <h2>Role : <span className='font-semibold'>{data.role}</span></h2>
                <h2>Speciality : <span className='font-semibold'>{data.speciality}</span></h2>
                <h2>PhoneNumber : <span className='font-semibold'>{data.phoneNumber}</span></h2>
                <h2>Experience : <span className='font-semibold'>{data.experience}</span></h2>
                <h2>Email Id : <span className='font-semibold'>{data.email}</span></h2>


              </div>
            </div>
          </div>
        </div>
      </div>


    </>


  )
}

export default DoctorProfile