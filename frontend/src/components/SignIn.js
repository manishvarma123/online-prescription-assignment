import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        phoneNumber: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/users/signin', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            })

            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data));
            console.log(data);

            if (data.success) {
                alert('SignIn Successfully');
            }
            if (data.data.role == 'Patient') {
                navigate('/patient/profile')
            }

            if (data.data.role == 'Doctor') {
                navigate('/doctor/profile')
            }

            setCredentials({
                email: '',
                phoneNumber: '',
            })


        } catch (err) {
            console.error(err);
            alert('Please Signup First');
            setCredentials({
                email: '',
                phoneNumber: '',
            })
        }
    }

    return (
        <div className='w-full min-h-screen bg-slate-300 px-3 py-8 flex justify-center'>
            <div className='w-full max-w-[500px] h-full'>
                <h1 className='text-center text-[28px] font-bold '>Welcome to Online Prescription </h1>
                <div className=' bg-white mt-12 px-8 py-8 rounded-md'>
                    <h1 className='text-center text-[24px] font-bold mb-6'>Signin</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <input className='border border-2 bg-slate-50 px-2 py-1' type='email' name='email' placeholder='Email' onChange={handleChange} required />
                        <input className='border border-2 bg-slate-50 px-2 py-1' type='text' name='phoneNumber' placeholder='phone Number' onChange={handleChange} required />
                        <button className='bg-blue-500 text-white py-1.5 w-full mx-auto mt-6 rounded-sm' type='submit'>Sign In</button>
                    </form>
                </div>

                <h3 className='mt-4 text-center font-medium'>Don't have Account ?</h3>
                <div className='mt-6 flex px-4 pb-4 justify-center gap-4'>
                    <Link to="/doctor/signup">
                        <button className='border border-2 px-4 py-1 bg-white border border-slate-500'>Doctor Signup</button>
                    </Link>
                    <Link to="/patient/signup">
                        <button className='border border-2 px-4 py-1 bg-white border border-slate-500'>Patient Signup</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default SignIn