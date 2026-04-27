import user from "../model/userSchema.js";

export const getAllUsers=async(req,res)=>{
    try{
        const users=await user.find({id: _id});
        res.status(200).json({
            success:true,
            users
        });
        console.log("Users retrieved successfully", users);
    }catch(error){
        console.log("Error in getAllUsers",error)
    }
}