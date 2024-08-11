import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PrescriptionForm = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    const [data, setData] = useState({});

    useEffect(() => {
        setData({ ...user.data })
        console.log(data);
    }, {})

    const { consultationId } = useParams();

    const [formData, setFormData] = useState({
        consultationId,
        careInstruction: '',
        medicines: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/prescription', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = response.json()

            alert('Prescription Created')
        } catch (err) {
            console.error(err);
            alert('Creation failed');
        }
    }

    return (

        <>
            <div className='w-full min-h-screen bg-slate-300 px-3 py-8 flex justify-center'>
                <div className='w-full max-w-[600px] h-full'>
                    <div className='mt-8 bg-white px-8 py-8 rounded-md'>
                        <div className='w-full '>
                            <form onSubmit={handleSubmit}>
                                <h2 className='text-[20px] font-bold mb-[10px]'>Care to be Taken</h2>
                                <input className='border border-2 w-full' type='text' name='careInstruction' placeholder='Care Instruction' onChange={handleChange} required />

                                <h2 className='text-[20px] font-bold mt-[20px]'>Medicine</h2>
                                <input className='border border-2 w-full' type='text' name='medicines' placeholder='Medicines' onChange={handleChange} />


                                <button className='bg-blue-500 text-white py-1.5 w-full mx-auto mt-6 rounded-sm' type='submit'>Create Prescription</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </>






    )
}

export default PrescriptionForm