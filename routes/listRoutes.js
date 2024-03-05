const express = require("express")
const router = express.Router()
const bookController = require('../controllers/bookController')

router.get('/listar', bookController.get)

module.exports = router;