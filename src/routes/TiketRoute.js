const express = require('express');
const router = express.Router();
const tiketController = require('../controllers/TiketController');
const authenticateToken = require('../middleware/verifyToken');

router.post('/tiket', tiketController.createTiket);
router.get('/tiket',tiketController.getAllTikets)

router.get('/tiket/:id', tiketController.getTiketById);

router.put('/tiket/:id', tiketController.updateTiket);

router.delete('/tiket/:id', tiketController.deleteTiket);
module.exports = router