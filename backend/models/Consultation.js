const mongoose = require('mongoose');

const consultSchema = new mongoose.Schema({
    doctorId : {type: mongoose.Schema.Types.ObjectId, ref : 'User', required: true},
    patientId : {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    illnessHistory : {type: String, required: true},
    recentSurgery : {type: String},
    familyMedicalHistory: {
        diabetics: {type: Boolean, required: true},
        allergies: {type: String},
        others: {type: String}
    },
    date: {type: Date, default: Date.now}
});

const Consultation = mongoose.model('Consultation',consultSchema);
module.exports = Consultation;