import React,{useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
 
const history=useNavigate()
  const LoginButton=async(e)=>{
    e.preventDefault();
try{
    const loginresult=await axios.post("http://localhost:3000/login",{email,password})
    console.log(loginresult.data)
    alert(" log in successfully");
    history("/home")

}
catch(err){
console.log(err)
alert("login failed.Please try again later");
}}
return (
  <section className='flex justify-center items-center bg-indigo-600 h-screen '>
      <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
          <h1 className='text-3xl font-semibold'>Login PAGE</h1>
          <hr className='mt-6'/>
          <div>
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
              <button className='border-black bg-purple-600 text-white p-2 mt-5 rounded-md w-full' onClick={LoginButton}>Login</button> <br/>
              <div className='mt-2'>Not Signedup Yet? Register Now.</div>
              <Link to="/"> <button className='border-black bg-purple-600 text-white p-2 mt-3 rounded-md w-full'>Register</button></Link>
          </div>
          </div>
  </section>
)
}

export default Login
