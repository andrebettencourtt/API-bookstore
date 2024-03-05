const express = require('express')
const router = express.Router()
const bookController = require("../controllers/bookController")

router.post('/salvar', bookController.post)

module.exports = router;