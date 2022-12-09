const express = require('express')
const managertableController = require('../controller/managertableController')

const router = express.Router()

//POST
router.post("/create/:dbId", managertableController.createTableOnDB) // CREATE TABLE IN DATABASE OF USER
router.post("/create/data/:tableId", managertableController.createDataTable) // INSERT DATA TO TABLE

//PUT
router.put("/update/data/:tableId", managertableController.updateDataTable) // UPDATE DATA TO TABLE

//GET DATA TABLE
router.get("/read/table/:dbId", managertableController.getTable)
router.get("/read/data/:tableId", managertableController.getAllDataTable)
router.get("/read/onedata/:tableId/:rowId", managertableController.getDataTableById)

//DELETE
router.delete("/delete/data/:tableId/:value", managertableController.deleteDataTable)
router.delete("/delete/table/:tableId", managertableController.deleteTable)

//GET TABLE
// router.get("/data/table/:dbId/:tableName", managertableController.getTableOnDB)

module.exports = router