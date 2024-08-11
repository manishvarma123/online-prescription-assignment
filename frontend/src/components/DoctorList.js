import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/users/doctors');
                const data = await response.json();

                setDoctors(data);
            } catch (err) {
                console.error(err);
                alert('Failed to load doctors')
            }
        };
        fetchDoctors();
    })

    const handleConsultClick = (doctorid) => {
        navigate(`/doctor/consult/${doctorid}`);
    }

    return (
        <div className='w-full h-full max-w-[1200px] mx-auto py-8'>
            <h2 className='text-[20px] font-medium mb-4'>Available Doctors</h2>
            <div className='flex gap-8'>
                {doctors.map((doctor) => {
                    return (
                        <div key={doctor._id} className='border border-2 w-full max-w-[300px] p-4 shadow-md min-h-[200px]'>
                            <img src={doctor.profilePicture} alt={`${doctor.name}`} />
                            <h3 className='mt-[10px]'>Doctor Name : <span className='capitalize font-medium'>Dr.{doctor.name}</span></h3>
                            <h3 className='mb-6'>Speciality : <span className='capitalize font-medium'>{doctor.speciality}</span></h3>
                            <Link to={`/doctor/consult/${doctor._id}`} className='border border-2 px-2 py-1 bg-blue-400 text-white block text-center' onClick={() => handleConsultClick(doctor._id)}>Consult</Link>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default DoctorList