const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./userModel");
const jwt = require("jsonwebtoken");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
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
  const { email, password } = req.body;

  // find user is sigup or not
  const user = await User.findOne({ email });

  // if not available show message
  if (!user) {
    return res.json({ message: "User is not registered!!" });
  }

  // check is pass valid or not
  const validPassword = await bcrypt.compare(password, user.password);

  // show message if not matched

  if (!validPassword) {
    return res.json({ message: "Password not matched" });
  }
  const token = jwt.sign({ email }, "mysecrettoken", { expiresIn: "3d" });
  res.cookie("token", token, {
    maxAge: 359999,
    httpOnly: true,
    sameSite: "none",
    secure: false,
  });
  return res.json({ message: "login successfully" });
});
router.post("/logout", async (req, res) => {
  res.clearCookie("token");
  res.status(200).send({ message: "Logout success" });
});


//  router.post("/resetPassword/:token",async(req,res)=>{


//       const {token} = req.body;

//       const {password} = req.body;

//       try{
//         const decoded =jwt.verify(token,process.env.secret_jwt_key,(err,decoded)=>{
       
//            const id = decoded.id;
//            const hashPassword=bcrypt.hash(password,10)
    
//            User.findByIdAndUpdate({_id: id},{password:hashPassword})
//             if(err)
//             {
//               res.status(401).send({message: "Not authorized"})
//             }




//         })
//       }

//       catch(err){
//         console.log(err);
//       }

//  })




router.post("/forgetPassword", async (req, res) => {
  const { email } = req.body;
  const token = req.cookies.token;
  console.log(token);
  // try {
  //   const user = await User.findOne({ email });
  //   if (!user) {
  //     return res.json({ message: "user not registered" });
  //   }

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ammaraslam7164@gmail.com',
      pass: 'wefopxlsdumlohpx'
    }
  });
  
  var mailOptions = {
    from: 'ammaraslam7164@gmail.com',
    to: email,
    subject: 'Sending Email for reset password',
    text: `http://localhost:5173/resetPassword/${token}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send({message: "error sending mail"})
    } else {
      console.log('Email sent: ' + info.response);
      res.send({message: "successfully sent!!"})
    }
  });
  })




module.exports = router;
