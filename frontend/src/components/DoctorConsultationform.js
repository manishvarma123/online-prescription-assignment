import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const DoctorConsultationform = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const { doctorId } = useParams();
  const patientId = user.data._id

  const [formData, setFormData] = useState({
    doctorId: doctorId,
    patientId: patientId,
    illnessHistory: '',
    recentSurgery: '',
    familyMedicalHistory: {
      diabetics: '',
      allergies: '',
      others: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('familyMedicalHistory.')) {
      const key = name.split('.')[1];
      setFormData({
        ...formData,
        familyMedicalHistory: {
          ...formData.familyMedicalHistory,
          [key]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(doctorId)
    try {
      const response = await fetch('http://localhost:5000/api/consultations', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json();
      if(data){
        alert('Form data Store Successfully')
        setFormData({
          doctorId: doctorId,
          patientId: patientId,
          illnessHistory: '',
          recentSurgery: '',
          familyMedicalHistory: {
            diabetics: '',
            allergies: '',
            others: '',
          },
        })
      }

    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }
  }


  console.log()
  return (

    <>
      <div className='w-full min-h-screen bg-slate-300 px-3 py-8 flex justify-center'>
        <div className='w-full max-w-[500px] h-full'>
          <div className=' bg-white mt-12 px-8 py-8 rounded-md'>
            <h1 className='text-center text-[24px] font-bold mb-6'>Doctor Consultation Form</h1>


            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <input className='border border-2 bg-slate-50 px-2 py-1' type="text" name='illnessHistory' placeholder='Illness History' onChange={handleChange} required />
              <input className='border border-2 bg-slate-50 px-2 py-1' type='text' name='recentSurgery' placeholder='RecentSurgery' onChange={handleChange} required />
              <div>
                <input className='border border-2 bg-slate-50 px-2 py-1 inline' type="radio" name="familyMedicalHistory.diabetics" value="true" onChange={handleChange} /> Diabetics
              </div>
              <div>
                <input className='border border-2 bg-slate-50 px-2 py-1' type="radio" name="familyMedicalHistory.diabetics" value="false" onChange={handleChange} /> Non-Diabetics
              </div>


              <input className='border border-2 bg-slate-50 px-2 py-1' type="text" name="familyMedicalHistory.allergies" placeholder="Allergies" onChange={handleChange} />
              <input className='border border-2 bg-slate-50 px-2 py-1' type="text" name="familyMedicalHistory.others" placeholder="Others" onChange={handleChange} />
              <button className='bg-blue-500 text-white py-1.5 w-full mx-auto mt-6 rounded-sm' type="submit">Submit</button>
            </form>



          </div>
        </div>
      </div>


    </>



  )
}

export default DoctorConsultationform