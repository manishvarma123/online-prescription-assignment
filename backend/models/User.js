const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: { type: String, enum: ['Doctor', 'Patient', 'Admin'], required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: {type: String, required: true, unique: true},
    profilePicture: {type: String, required: true},
    speciality: {type: String}, //Only for Doctors
    experience: {type: Number}, //Only for Doctors
    age: {type: Number}, //Only for Patients
    surgeryHistory: {type: String}, //Only for Patients
    illnessHistory: {type: String}, //Only for Patients
});

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;