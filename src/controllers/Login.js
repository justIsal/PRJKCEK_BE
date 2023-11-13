const bcrypt = require('bcrypt');
const Admin = require('../models/AdminModel');
const jwt = require('jsonwebtoken')
const login = async(req,res)=> {
    const {email,password} = req.body;
    try {
        let user = await Admin.findOne({ email });
        if(!user){
            return res.status(404).json({ error : "User not found"});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({error: "Invalid password"});
        }
        const accessToken = jwt.sign({email,password},process.env.ATS, {
            expiresIn: "30m"
        })
        const refreshToken = jwt.sign({email,password},process.env.RTS, {
            expiresIn: "1d"
        })
        const getUser = await Admin.findByIdAndUpdate(
            user._id,
            { refreshToken },
            { new : true },
        )
        await getUser.save();
        res.cookie('RT',refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 100,
            })
        const id = user._id
        const userName = user.name
        const userEmail = user.email
        res.json({message: `Login Succesfull `,id,userName,userEmail,accessToken})
    }catch(err){
        res.status(500).send(err.message)
    }
}
module.exports = {
    login
}