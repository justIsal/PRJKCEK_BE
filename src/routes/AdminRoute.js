const express = require('express');
const router = express.Router();
const adminController = require('../controllers/AdminController');
const authenticateToken = require('../middleware/verifyToken');

router.post('/', adminController.createAdmin);
router.get('/',authenticateToken,adminController.getAllAdmins)

router.get('/:id',authenticateToken, adminController.getAdminById);

router.put('/:id',authenticateToken, adminController.updateAdmin);

router.delete('/:id',authenticateToken, adminController.deleteAdmin);
module.exports = router