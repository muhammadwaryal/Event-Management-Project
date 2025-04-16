 import mongoose, { model } from "mongoose";

// const userSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   password:{
//           type:String,
//           unique:true,
//           required:true
//   },
//   phoneNumber:{
//           type:Number,
//           unique:true
//   },
//   rollNo:{
//           type:String,
//           unique:true,
//           required:true
//   },
//   profilephoto:{
//           type:String,
//           required:false
//   },
//   idcardphoto:{
//           type:String,
//           required:false
//   },
//   role:{
//           type:String,
//           enum:['Organizer', 'Attendee', 'admin'],
//   },
//   registeredEvent:[
//           {
//           type:mongoose.Schema.Types.ObjectId, ref:"event"
//           }
//   ]
  
// },{timestamps:true});
// export const User  = mongoose.model('User',userSchema);



const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: Number,
    // unique: true,
  },
  rollNo: {
    type: String,
    sparse: true
    // unique: true,
    // required: true,
  },
  profilephoto: {
    type: String,
    required: false,
  },
  idcardphoto: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    // enum: ['Organizer', 'Attendee', 'admin'],
    enum: ['organizer', 'student'],
  },
  registeredEvent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
  ],
},
{ timestamps: true });

export const User = mongoose.model('User', userSchema);
