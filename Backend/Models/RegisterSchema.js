import mongoose from 'mongoose';
const { Schema } = mongoose;

const RegisterSchema = new Schema({
  name:{
    type:String,
    required:true
  },
email:{
    type:String,
    required:true
  },
password:{
    type:String,
    required:true
  }
});
 const registerschema=mongoose.model('registerschema',RegisterSchema);
 export default registerschema