const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// signup

exports.signup = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password } = req.body;

    // if any fields are empty
    if (!FirstName || !LastName || !Email || !Password) {
      return res.status(400).json({
        success: false,
        message: "please fill all the credincial",
      });
    }

    // if user are already exist
    const existuser = await User.findOne({ Email });
    if (existuser) {
      return res.status(400).json({
        success: false,
        message: "user already exist",
      });
    }

    // secure password
    let hashpassword;
    try {
      hashpassword = await bcrypt.hash(Password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "error in hashing password",
      });
    }
    // created user in db
    const user = await User.create({
      FirstName,
      LastName,
      Email,
      Password: hashpassword,
    });
    return res.status(200).json({
      success: true,
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "user cannot be register please try again leter",
    });
  }
};

// login

exports.login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return res.status(400).json({
        success: false,
        message: "fill all the details carefully",
      });
    }

    let user = await User.findOne({ Email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "please signup first",
      });
    }
    // if user is found then verify the password and generate token
    const payload= {
        Email:user.Email,
        id:user._id
    }

    if (await bcrypt.compare(Password, user.Password)){
        // if password is matched then generate token
        let token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:3*24*60*60*1000});

        user= user.toObject();
        user.token= token;

        const options ={
            expires: new Date(Date.now() + 4*24*60*60*1000),
            httpOnly:true
        }

        res.cookie('token', token, options).status(200).json({
            success:true,
            token,
            user,
            message:'logged in successfully'
        })
    }
    else {
        return res.status(403).json({
            success: false,
            message: "incorrect password",
          });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
        success:false,
        message:'login falilure'
    })
  }
};
