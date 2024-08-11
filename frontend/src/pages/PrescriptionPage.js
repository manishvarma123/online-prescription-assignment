import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PrescriptionPage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const doctorId = user.data._id

    const [consultations, setConsultations] = useState([]);
    const [prescriptions, setPrescriptions] = useState([]);

    const fetchConsultations = async () => {
        const response = await fetch(`http://localhost:5000/api/consultations/${doctorId}`);
        const data = await response.json();

        setConsultations(data);
    }

    const fetchPrescriptions = async () => {
        const response = await fetch(`http://localhost:5000/api/prescriptions/${doctorId}`);
        const data = await response.json();

        setPrescriptions(data);
    }



    useEffect(() => {
        fetchConsultations()
        fetchPrescriptions()
    }, [])

    return (


        <>
            <div className='w-full min-h-screen bg-slate-300 px-3 py-8 flex justify-center'>
                <div className='w-full max-w-[600px] h-full'>
                    <div className='mt-8 bg-white px-8 py-8 rounded-md'>
                        <div className='w-full '>
                            <h2 className='text-[20px] font-bold mb-[20px]'>Consultations</h2>
                            {
                                consultations.map((consultation) => {
                                    return (
                                        <div className='border border-2 shadow-md px-4 py-2 mb-4 flex flex-col gap-3' key={consultation._id}>
                                            <p>{consultation.illnessHistory}</p>
                                            <Link to={`/doctor/prescription_form/${consultation._id}`}>
                                                <button className='bg-blue-400 px-3 py-1 rounded-sm text-white'>Prescription Form</button>
                                            </Link>
                                        </div>
                                    )

                                })
                            }


                            <h2 className='text-[20px] font-bold mb-[20px]'>Prescriptions</h2>
                            {
                                prescriptions.map((prescription) => {
                                    <div key={prescription._id}>
                                        <p>{prescription.careInstructions}</p>
                                        {/* <a href={prescription.pdfPath} download>Download PDF</a> */}
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default PrescriptionPage