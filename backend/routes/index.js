const express = require('express');
const doctorSignUp = require('../controllers/User/DoctorSignUp');
const SignIn = require('../controllers/User/Signin');
const getDoctors = require('../controllers/User/getDoctors');
const createConsultation = require('../controllers/consultation/createConsultation');
const getConsultations = require('../controllers/consultation/getConsultaion');
const createPrescription = require('../controllers/prescription/createPrescription');
const getPrescription = require('../controllers/prescription/getPrescription');



const router = express.Router()



router.post("/users/doctorSignup", doctorSignUp)
router.post("/users/signin",SignIn)
router.get("/users/doctors",getDoctors)
router.post("/consultations",createConsultation)
router.get("/consultations/:doctorId", getConsultations);
router.post("/prescription",createPrescription)
router.get("/prescriptions/:doctorId",getPrescription)





module.exports = router;