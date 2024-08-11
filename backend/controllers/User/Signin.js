const UserModel = require("../../models/User")


const SignIn = async(req,res) => {
    try{
        const user = await UserModel.findOne({email:req.body.email, phoneNumber: req.body.phoneNumber});
        if(!user){
            return(
                res.status(404).json({message: 'User not found'})
            )
        }
        res.status(200).json({
            data : user,
            success : true,
            error: false,
            message: "User Login successfully"
        })

    }catch(err){
        res.status(400).json({
            message : err.message,
            error: true,
            success: false,
        })
    }
}

module.exports = SignIn