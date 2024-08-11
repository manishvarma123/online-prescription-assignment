const UserModel = require("../../models/User")


const doctorSignUp = async(req,res) => {
    try{
        const newUser = new UserModel(req.body)
        const saveUser = await newUser.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error: false,
            message: "User Created successfully"
        })
    }catch(err){
        res.status(400).json({
            message: err.message,
            error: true,
            success: false
        })
    }
}

module.exports = doctorSignUp;
