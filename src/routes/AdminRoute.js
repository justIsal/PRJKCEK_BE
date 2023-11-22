const express = require('express');
const router = express.Router();
const adminController = require('../controllers/AdminController');
const authenticateToken = require('../middleware/verifyToken');

router.post('/admin', adminController.createAdmin);
router.get('/admin',authenticateToken,adminController.getAllAdmins)

router.get('/admin/:id',authenticateToken, adminController.getAdminById);

router.put('/admin/:id',authenticateToken, adminController.updateAdmin);

router.delete('/admin/:id',authenticateToken, adminController.deleteAdmin);
module.exports = router