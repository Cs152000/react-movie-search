import React,{useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Registration = () => {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
   
const history=useNavigate()
    const RegisterButton=async(e)=>{
        e.preventDefault();
try{
        const result=await axios.post("http://localhost:3000/register",{name,email,password})
        console.log(result.data)
        alert("Registration successfully.please login to home page");
      history("/login")

}
catch(err){
    console.log(alert("Registration failed.Please try again later"))
    
}}
  return (
    <section className='flex justify-center items-center bg-indigo-600 h-screen '>
        <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
            <h1 className='text-3xl font-semibold'>REGISTRATION PAGE</h1>
            <hr className='mt-6'/>
            <div>
                <label htmlFor="username" className='block text-base focus:outline-none focus:ring-0 focus:border-gray-600 text-left'>UserName</label>
                <input type="text" id="username" className='border py-2 px-1 w-full' placeholder='Enter UserName'
                 value={name} onChange={(e)=>setName(e.target.value)}/>
                  <label htmlFor="email" className='block text-base  text-left'>Email</label>
                <input type="email" id="email" className='border py-2 px-1 w-full' placeholder='Enter password'
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="password" className='block text-base  text-left'>Password</label>
                <input type="password" id="password" className='border py-2 px-1 w-full' placeholder='Enter password'
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
               
            </div>
            <div className='flex justify-between items-center mt-3'>
                <div>
                    <input type="checkbox" />
                   <label>Remember Me</label>
                </div>
                <div>
                    <a href="#" className='text-purple-700'>Forget Password?</a>
                </div>
            </div>
            <div>
                <button className='border-black bg-purple-600 text-white p-2 mt-5 rounded-md w-full' onClick={RegisterButton}>Register</button> <br/>
                <Link to="/login"> <button className='border-black bg-purple-600 text-white p-2 mt-5 rounded-md w-full'>Login</button></Link>
            </div>
            </div>
    </section>
  )
}

export default Registration
