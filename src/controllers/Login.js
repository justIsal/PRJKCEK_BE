const bcrypt = require('bcrypt');
const Admin = require('../models/AdminModel');

const login = async(req,res)=> {
    const {email,password} = req.body;
    try {
        let user = await Admin.findOne({ email });
        let role = "admin"
        if(!user){
            return res.status(404).json({ error : "User not found"});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({error: "Invalid password"});
        }
        res.json({message: `Login Succesfull as ${role} `,user})
    }catch(err){
        res.status(500).send(err.message)
    }
}
module.exports = {
    login
}