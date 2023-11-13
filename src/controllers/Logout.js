const Admin = require('../models/AdminModel')

const logout = async(req, res) => {
    try {
        const refreshtoken = req.cookies.RT;
        if(!refreshtoken) return res.sendStatus(204);
        let user = await Admin.findOne({refreshToken: refreshtoken});
        if(!user) return res.sendStatus(204)
        const userId = user._id
        await Admin.findByIdAndUpdate(userId, { refreshToken: null }, {
            new: true,
        });
        res.clearCookie('RT');
        return res.sendStatus(200);
    } catch (error) {
        console.error('Pembaruan gagal:', error);
    }
    
}
module.exports = logout