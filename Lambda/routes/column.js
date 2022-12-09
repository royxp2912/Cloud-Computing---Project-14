const express = require('express')
const managercolumnController = require('../controller/columnController')

const router = express.Router()

//GET COLUMN
router.get("/read/:tableId", managercolumnController.getColumnTaBle)

module.exports = router