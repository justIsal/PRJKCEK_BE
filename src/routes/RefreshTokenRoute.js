const refreshToken = require("../controllers/refreshToken");
const express = require("express");
const route = express.Router();

route.get('/',refreshToken);
module.exports = route;