const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res)=>{
    try{
        const {name, email, employeeId, contact, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({response: "User already exists"});
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const user = new User({name, email, employeeId, contact,password:hashedPass});
        await user.save();
        res.status(201).json({response: user});        
    }catch(err){
        res.status(500).json({response: err})
    }
}
exports.loginUser = async (req, res)=>{ 
        try{
            const {email, password} = req.body;
            const existingUser = await User.findOne({email});
            if(!existingUser){
                return res.status(401).json({response: "Invalid username or Password"});
            }
            const isPasswordvalid = await bcrypt.compare(password, existingUser.password);
            if(!isPasswordvalid){
                return res.status(401).json({response: "Invalid username or Password"});
            }
            //Generate JWT Token and share that Token with LoggedIn Users
            const token = jwt.sign({ email: email }, process.env.SECRET_CODE, { expiresIn: '1h' });
            res.status(200).json({email: existingUser.email, token:token });        
        }catch(err){
            res.status(500).json({response: err})
        }
}