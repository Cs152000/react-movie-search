import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
    },
   email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  });
  
  // Create User model
  const UserModel = mongoose.model('UserModel', userSchema);
  
  // Export User model
  export default UserModel;
