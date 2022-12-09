const express = require('express')
const managerdbController = require('../controller/managerdbController')

const router = express.Router()

//POST
router.post("/create", managerdbController.createDB) // CREATE DATABSE OF USER

//GET DATABASE
router.get("/", managerdbController.getAllDB)
router.get("/:dbId", managerdbController.getDBById)
router.get("/user/:username", managerdbController.getDBOfUser)

//DELETE
router.delete("/delete/:dbId", managerdbController.deleteDB)

module.exports = router