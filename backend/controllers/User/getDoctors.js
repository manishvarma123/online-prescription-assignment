const UserModel = require("../../models/User")


const getDoctors = async (req,res) => {
    try{
        const doctors = await UserModel.find({role : 'Doctor'});
        res.status(200).json(doctors);
    }catch(err){
        res.status(400).json({
            message : err.message,
            error : true,
            success : false
        })
    }
}

module.exports = getDoctors;