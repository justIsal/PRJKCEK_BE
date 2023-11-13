const express = require('express');
const router = express.Router();
const logoutUser = require('../controllers/Logout')

router.delete('/logout',logoutUser);

module.exports = router