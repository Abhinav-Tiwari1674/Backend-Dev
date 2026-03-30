import mongoose from "mongoose";
const connectDb = async () => {
    try {
    await mongoose.connect("mongodb://127.0.0.1:27017/BackendDb") 
    console.log("MongoDB Connected")
    } catch (error) {
        console.error("MongoDB Connection Failed", error)
    } 
}
export default connectDb;