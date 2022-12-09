const express = require('express')
const userController = require('../controller/userController')

const router = express.Router()

//GET
router.get("/", userController.getAllUser)

module.exports = router