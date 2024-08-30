const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./userModel");
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user =await User.findOne({ email });
  if (user) {
    return res.json({ message: "Already Existed!!!!" });
  }
  const hashpassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashpassword,
  });

  await newUser.save();
  res.json({ message: "record registered!" });
});

router.post("/login", async (req, res) => {
  const {email,password} = req.body;

  // find user is sigup or not
  const user =await User.findOne({email})
 
  // if not available show message
  if(!user)
  {

    return res.json({message: "User is not registered!!"})
  }
  
  // check is pass valid or not
  const validPassword = await bcrypt.compare(password,user.password)
  
  // show message if not matched

  if(!validPassword)
  {
    return res.json({message:"Password not matched"})
  }
  const token = jwt.sign({email},"mysecrettoken",{expiresIn:"3d"})
  res.cookie('token',token,{
    maxAge:359999,
    httpOnly: true,
    sameSite: "none",
    secure: false
  })
  return res.json({message: "login successfully"})
});

module.exports = router;
