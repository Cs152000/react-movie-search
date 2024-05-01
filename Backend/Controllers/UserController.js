import UserModel from '../Models/userSchema.js'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

const RegisterUser =async(req,res)=>{
    try{
    const {name,email,password}=req.body;
    if( !name || !email || !password){
      return  res.status(400).json({message:"all fields are required"})
    }
    const ExistUser=await UserModel.findOne({email})
    if(ExistUser){
      return  res.status(400).send("user already exist")
    }
    const salt=await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(password,salt)
    console.log(hashpassword)
    const newRegister=await UserModel.create({name,
        email,
        password:hashpassword,
    })
if(newRegister){
    console.log(newRegister)
     res.status(200).json({
        _id:newRegister.id,
        name:newRegister.name,
        email:newRegister.email,
       token:generateToken(newRegister._id)
        
     })
    }}
   catch(error){
    console.error(error);
        res.status(500).json({ message: 'Failed to register user' });
}}

const LoginUser =async(req,res)=>{
   const {email,password}=req.body;
   const firstUser=await UserModel.findOne({email})
   if(!firstUser){
    res.status(400).json("registration not done")
   }
   if(firstUser && (await bcrypt.compare(password,firstUser.password))){
    res.status(200).json({
        _id:firstUser.id,
        email:firstUser.email,
        password:firstUser.password,
        token:generateToken(firstUser._id)
    })
    console.log("login successful")
   }
}
//jwt token generater
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET, { expiresIn: '1h' })
}
export  {RegisterUser,LoginUser};