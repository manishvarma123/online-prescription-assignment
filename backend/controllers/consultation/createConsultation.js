const Consultation = require("../../models/Consultation")


const createConsultation = async(req,res) => {
    try{
        const newConsultation = new Consultation(req.body);
        await newConsultation.save();
        res.status(201).json(newConsultation);
    }catch(error){
        res.status(400).json({
            message: error.message,
            error: true,
            success: false,
        })
    }
}

module.exports = createConsultation