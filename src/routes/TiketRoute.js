const express = require('express');
const router = express.Router();
const tiketController = require('../controllers/TiketController');
const authenticateToken = require('../middleware/verifyToken');

router.post('/tiket', tiketController.createTiket);

router.post('/tiket/pesanan',tiketController.getTiketBypesanan )

router.get('/tiket',tiketController.getAllTikets)

router.get('/tiket/:id', tiketController.getTiketById);

router.put('/tiket/:id', tiketController.updateTiket);

router.delete('/tiket', tiketController.deleteTiket);
router.delete('/tiket/:id', tiketController.deleteTiketById);
module.exports = router