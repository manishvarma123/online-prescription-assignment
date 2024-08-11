const Consultation = require("../../models/Consultation");
const Prescription = require("../../models/Prescription");


const createPrescription = async (req, res) => {
    try {
        const newPrescription = new Prescription(req.body);

        await newPrescription.save();

        res.status(201).json(newPrescription);
    } catch (err) {
        res.status(400).json({
            message: err.message,
            error: true,
            success: false
        })
    }
}

module.exports = createPrescription;
