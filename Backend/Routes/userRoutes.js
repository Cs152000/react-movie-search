import express from 'express'
const userRoutes= express.Router();
import {RegisterUser,LoginUser} from '../Controllers/UserController.js'

userRoutes.post("/register",RegisterUser)
userRoutes.post("/login",LoginUser)
export default userRoutes;