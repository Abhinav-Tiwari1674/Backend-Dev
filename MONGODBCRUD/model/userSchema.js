import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxLength :[25, "Name should be less than 25 characters"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    
    password: {
        type: String,
        required: true,
        minLength: [6, "Password should be at least 6 characters long"]
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
});
const User = mongoose.model("User", userSchema);


export default User;


