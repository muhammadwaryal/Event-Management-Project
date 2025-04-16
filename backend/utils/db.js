import mongoose from "mongoose";


const connectDB = async ()=>{
try {
          console.log("22",process.env.MONGODB_URI);
          await mongoose.connect(process.env.MONGODB_URI);
          console.log("Mongodb Connnected Successfully:");
          
          
} catch (error) {
          console.log(error);
          
          
}
}
export default connectDB;