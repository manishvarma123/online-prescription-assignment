const Consultation = require("../../models/Consultation")


const getConsultations = async (req,res) => {
    try{
        const consultations = await Consultation.find({
            doctorId : req.params.doctorId
        });
        res.status(200).json(consultations);
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = getConsultations;