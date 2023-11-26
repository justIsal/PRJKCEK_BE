const express = require('express');
const router = express.Router();
const tiketController = require('../controllers/TiketController');
const authenticateToken = require('../middleware/verifyToken');

router.post('/', tiketController.createTiket);

router.get('/',authenticateToken,tiketController.getAllTikets)

router.get('/:id',authenticateToken, tiketController.getTiketById);

router.put('/:id',authenticateToken, tiketController.updateTiket);

router.delete('/',authenticateToken, tiketController.deleteTiket);
router.delete('/:id',authenticateToken, tiketController.deleteTiketById);
module.exports = router