const Prescription = require("../../models/Prescription");

const getPrescription = async(req,res) => {
    try {
        const prescriptions = await Prescription.find({ doctorId: req.params.doctorId });
        res.status(200).json(prescriptions);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

module.exports = getPrescription;