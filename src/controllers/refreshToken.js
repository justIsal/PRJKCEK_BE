const Admin = require("../models/AdminModel");
const jwt = require("jsonwebtoken");
const refreshToken = async (req, res) => {
  try {
    const refreshtoken = req.cookies.RT;
    if (!refreshtoken) return res.sendStatus(401);
    let user = await Admin.findOne({ refreshToken: refreshtoken });
    if (!user) return res.sendStatus(403);
    jwt.verify(refreshtoken, process.env.RTS, (err, decoded) => {
      if (err) return res.sendStatus(403);
      if (user) {
        const userId = user._id;
        const name = user.name;
        const email = user.email;
        const role = user.role;
        // const all = user
        let expiresIn = "3h";
        const accessToken = jwt.sign(
          { userId, name, email, role},
          process.env.ATS,
          {
            expiresIn,
          }
        );
        res.json({ accessToken });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = refreshToken;
