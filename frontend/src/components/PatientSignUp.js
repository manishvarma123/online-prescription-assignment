import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PatientSignUp = () => {

    const [formData, setFormData] = useState({
        role: 'Patient',
        profilePicture: '',
        name: '',
        age: '',
        email: '',
        phoneNumber: '',
        surgeryHistory: '',
        illnessHistory: ''
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
                        <h1 className='text-center text-[24px] font-bold mb-6'>Patient SignUp</h1>

                        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                            <input className='border border-2 bg-slate-50 px-2 py-1' type="text" name="name" placeholder="Name" onChange={handleChange} required />
                            <input className='border border-2 bg-slate-50 px-2 py-1' type="number" name="age" placeholder="Age" onChange={handleChange} required />
                            <input className='border border-2 bg-slate-50 px-2 py-1' type="email" name="email" placeholder="Email" onChange={handleChange} required />
                            <input className='border border-2 bg-slate-50 px-2 py-1' type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                            <input className='border border-2 bg-slate-50 px-2 py-1' type="text" name="surgeryHistory" placeholder="Surgery History" onChange={handleChange} required />
                            <input className='border border-2 bg-slate-50 px-2 py-1' type="text" name="illnessHistory" placeholder="Illness History" onChange={handleChange} required />
                            <input className='border border-2 bg-slate-50 px-2 py-1' type="file" name="profilePicture" onChange={handleChange} required />
                            <button className='bg-blue-500 text-white py-1.5 w-full mx-auto mt-6 rounded-sm' type="submit">Sign Up</button>
                        </form>

                    </div>
                </div>
            </div>










            <div className='w-full h-full flex justify-center'>

            </div>


        </>

    )
}

export default PatientSignUp