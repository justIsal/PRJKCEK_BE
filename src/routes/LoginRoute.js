const express = require('express');
const router = express.Router();
const loginUser = require('../controllers/Login');

router.post('/login',loginUser.login);

module.exports = router