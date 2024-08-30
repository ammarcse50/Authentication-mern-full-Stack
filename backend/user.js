const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./userModel");

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

// router.post("/login", async (req, res) => {

//   const user = userModel.findOne({email})

//   if(user)
//   {

//   if()

//   }

// });

module.exports = router;
