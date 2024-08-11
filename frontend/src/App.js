import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DoctorSignUp from './components/DoctorSignUp';
import PatientSignUp from './components/PatientSignUp';
import SignIn from './components/SignIn';
import DoctorList from './components/DoctorList';
import DoctorConsultationform from './components/DoctorConsultationform';
import DoctorProfile from './components/DoctorProfile';
import PrescriptionPage from './pages/PrescriptionPage';
import PrescriptionForm from './pages/PrescriptionForm';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<HomePage/>}/> */}
        <Route path='/doctor/signup' element={<DoctorSignUp />} />
        <Route path='/patient/signup' element={<PatientSignUp />} />
        <Route path='/' element={<SignIn />}/>
        <Route path='/patient/profile' element={<DoctorList />} />
        <Route path='/doctor/consult/:doctorId' element={<DoctorConsultationform />} />
        <Route path='/doctor/profile' element={<DoctorProfile />} />
        <Route path='/doctor/prescription_page' element={<PrescriptionPage />} />
        <Route path='/doctor/prescription_form/:consultationId' element={<PrescriptionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
