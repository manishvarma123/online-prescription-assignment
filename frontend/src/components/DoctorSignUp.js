import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const DoctorSignUp = () => {

    const [formData, setFormData] = useState({
        role: 'Doctor',
        profilePicture: '',
        name: '',
        speciality: '',
        email: '',
        phoneNumber: '',
        experience: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/users/doctorSignup', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            if (data.success) {
                alert('SignUp Successfully')
                navigate("/")
            }
        } catch (err) {
            console.error(err);
            alert('Sign-up failed');
        }
    }

    return (
        <>
            <div className='w-full min-h-screen bg-slate-300 px-3 py-8 flex justify-center'>
                <div className='w-full max-w-[500px] h-full'>
                    <div className=' bg-white mt-12 px-8 py-8 rounded-md'>
                        <h1 className='text-center text-[24px] font-bold mb-6'>Doctor SignUp</h1>

                        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                            <input className='border border-2 bg-slate-50 px-2 py-1' type='text' name='name' placeholder='Enter Name' required onChange={handleChange} />
                            <input className='border border-2 bg-slate-50 px-2 py-1' type='text' name='speciality' placeholder='Enter Speciality' required onChange={handleChange} />
                            <input className='border border-2 bg-slate-50 px-2 py-1' type='email' name='email' placeholder='Enter Email' required onChange={handleChange} />
                            <input className='border border-2 bg-slate-50 px-2 py-1' type='text' name='phoneNumber' placeholder='Phone Number' required onChange={handleChange} />
                            <input className='border border-2 bg-slate-50 px-2 py-1' type='Number' name='experience' placeholder='Experience (years)' required onChange={handleChange} />
                            <input className='border border-2 bg-slate-50 px-2 py-1' type='file' name='profilePicture' required onChange={handleChange} />
                            <button className='bg-blue-500 text-white py-1.5 w-full mx-auto mt-6 rounded-sm' type='submit'>Signup</button>
                        </form>


                    </div>
                </div>
            </div>



        </>


    )
}

export default DoctorSignUp