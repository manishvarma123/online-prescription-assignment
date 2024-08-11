const mongoose = require ('mongoose');


const prescriptionSchema = new mongoose.Schema({
    consultationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultation', required: true },
    careInstruction: { type: String, required: true },
    medicines: { type: String },
    // pdfPath: { type: String },
    date: { type: Date, default: Date.now }
});

const Prescription = mongoose.model('Prescription',prescriptionSchema);

module.exports = Prescription