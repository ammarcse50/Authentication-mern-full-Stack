const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const UserRouter = require('./user.js')
const app = express()
const port = 3000;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(UserRouter)
app.use('/api/user',UserRouter)
 mongoose.connect("mongodb://127.0.0.1:27017/school")
app.listen(3000,()=>{
    console.log(`running on port ${port}`)
})