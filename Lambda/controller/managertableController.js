const pool = require('../config/connectRDS')
const con = require('../config/connectAdminRDS')
const mysql2 = require('mysql2/promise');

let deleteTable = async (req, res, next) => {
    try {
        let [tables] = await pool.execute(`SELECT * FROM managertable WHERE id_table=?`, [req.params.tableId])
        if (!tables[0]) {
            return res.status(404).send('Table Does not Exist!')
        }
        let [db] = await pool.execute(`SELECT * FROM managerdb WHERE id=?`, [tables[0].id_db])
        const poolDeleteTable = mysql2.createPool({
            host: 'cloud.cxrmdauvfwmy.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: '29122002',
            port: '3306',
            database: `${db[0].name}`
        })
        //DELETE TABLE Real
        const queryReal = `DROP TABLE ${tables[0].name_table}`
        await poolDeleteTable.execute(queryReal)
        //DELETE Column of Table
        const queryColumn = `DELETE FROM managercolumn WHERE id_table=${req.params.tableId}`
        await pool.execute(queryColumn)
        //DELETE Table Fake
        const queryFake = `DELETE FROM managertable WHERE id_table=${req.params.tableId}`
        await pool.execute(queryFake)
        res.status(200).send("Table Has Been Delete!")
    } catch (err) {
        next(err)
    }
}

let deleteDataTable = async (req, res, next) => {
    try {
        let [tables] = await pool.execute(`SELECT * FROM managertable WHERE id_table=?`, [req.params.tableId])
        if (!tables[0]) {
            return res.status(404).send('Table Does not Exist!')
        }
        let [db] = await pool.execute(`SELECT * FROM managerdb WHERE id=?`, [tables[0].id_db])
        let [columns] = await pool.execute(`SELECT * FROM managercolumn WHERE id_table=?`, [req.params.tableId])

        const poolDeleteDataTable = mysql2.createPool({
            host: 'cloud.cxrmdauvfwmy.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: '29122002',
            port: '3306',
            database: `${db[0].name}`
        })
        const firstColumn = columns.shift().name_column
        const queryRead = `SELECT * FROM ${tables[0].name_table} WHERE ${firstColumn}=${req.params.value}`
        let [data] = await poolDeleteDataTable.execute(queryRead)
        if (data[0]) {
            const queryDelete = `DELETE FROM ${tables[0].name_table} WHERE ${firstColumn}=${req.params.value}`
            await poolDeleteDataTable.execute(queryDelete)
        } else {
            return res.status(404).send("Data Does Not Exist!")
        }
        res.status(200).send("Data Has Been Delete!")
    } catch (err) {
        next(err)
    }
}

let getDataTableById = async (req, res, next) => {
    try {
        let [tables] = await pool.execute(`SELECT * FROM managertable WHERE id_table=?`, [req.params.tableId])
        if (!tables[0]) {
            return res.status(404).send('Table Does not Exist!')
        }
        let [db] = await pool.execute(`SELECT * FROM managerdb WHERE id=?`, [tables[0].id_db])
        
        const poolDataTable = mysql2.createPool({
            host: 'cloud.cxrmdauvfwmy.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: '29122002',
            port: '3306',
            database: `${db[0].name}`
        })
        const queryColumn = `SELECT id_column, name_column FROM managercolumn WHERE id_table=${tables[0].id_table}`
        let [infoColumn] = await pool.execute(queryColumn)
        const nameColumn = infoColumn.map((column) => column.name_column)
        const queryRead = `SELECT * FROM ${tables[0].name_table} WHERE ${nameColumn.shift()}=${req.params.rowId}`
        let [infoData] = await poolDataTable.execute(queryRead)
        res.status(200).json({ infoColumn, infoData })
    } catch (err) {
        next(err)
    }
}

let getTable = async (req, res, next) => {
    try {
        let [tables] = await pool.execute(`SELECT * FROM managerdb WHERE id=?`, [req.params.dbId])
        if (!tables[0]) {
            return res.status(404).send('Database Does Not Exist!')
        }

        const queryRead = `SELECT * FROM managertable WHERE id_db=${req.params.dbId}`
        let [info] = await pool.execute(queryRead)
        res.status(200).json({ info })
    } catch (err) {
        next(err)
    }
}

let getAllDataTable = async (req, res, next) => {
    try {
        let [tables] = await pool.execute(`SELECT * FROM managertable WHERE id_table=?`, [req.params.tableId])
        if (!tables[0]) {
            return res.status(404).send('Table Does not Exist!')
        }
        let [db] = await pool.execute(`SELECT * FROM managerdb WHERE id=?`, [tables[0].id_db])
        
        const poolDataTable = mysql2.createPool({
            host: 'cloud.cxrmdauvfwmy.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: '29122002',
            port: '3306',
            database: `${db[0].name}`
        })
        const queryColumn = `SELECT id_column, name_column FROM managercolumn WHERE id_table=${tables[0].id_table}`
        let [infoColumn] = await pool.execute(queryColumn)
        const queryRead = `SELECT * FROM ${tables[0].name_table}`
        let [infoData] = await poolDataTable.execute(queryRead)
        res.status(200).json({ infoColumn, infoData })
    } catch (err) {
        next(err)
    }
}

let updateDataTable = async (req, res, next) => {
    try {
        let [tables] = await pool.execute(`SELECT * FROM managertable WHERE id_table=?`, [req.params.tableId])
        if (!tables[0]) {
            return res.status(404).send('Table Does not Exist!')
        }
        let [db] = await pool.execute(`SELECT * FROM managerdb WHERE id=?`, [tables[0].id_db])
        let [columns] = await pool.execute(`SELECT * FROM managercolumn WHERE id_table=?`, [req.params.tableId])

        const poolDataTable = mysql2.createPool({
            host: 'cloud.cxrmdauvfwmy.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: '29122002',
            port: '3306',
            database: `${db[0].name}`
        })
        const arrayUpdate = Object.values(req.body.update);
        const firstColumn = columns.shift()
        const newQuery = columns.map((item, index) => {
            return `${item.name_column}=?`
        }).join(", ")
        const querryUpdateData = `UPDATE ${tables[0].name_table} SET ${newQuery} WHERE ${firstColumn.name_column}=${req.body.firstColumn}`
        await poolDataTable.execute(querryUpdateData, arrayUpdate)
        res.status(200).send("Update Data Done!")
    } catch (err) {
        next(err)
    }
}

let createDataTable = async (req, res, next) => {
    try {
        let [tables] = await pool.execute(`SELECT * FROM managertable WHERE id_table=?`, [req.params.tableId])
        if (!tables[0]) {
            return res.status(404).send('Table Does not Exist!')
        }
        let [db] = await pool.execute(`SELECT * FROM managerdb WHERE id=?`, [tables[0].id_db])
        let [columns] = await pool.execute(`SELECT * FROM managercolumn WHERE id_table=?`, [req.params.tableId])

        const poolDataTable = mysql2.createPool({
            host: 'cloud.cxrmdauvfwmy.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: '29122002',
            port: '3306',
            database: `${db[0].name}`
        })
        const arrayInput = Object.values(req.body);
        const newQuery = columns.map((item) => {
            return `${item.name_column}`
        }).join(", ")
        const countQ = columns.map(() => `?`).join(",")
        const querryInsertData = `INSERT INTO ${tables[0].name_table}(${newQuery})
                                    VALUES(${countQ})`
        await poolDataTable.execute(querryInsertData, arrayInput)
        res.status(200).send("Insert Data Done!")
    } catch (err) {
        next(err)
    }
}

let createTableOnDB = async (req, res, next) => {
    try {
        let [db, fields] = await pool.execute(`SELECT * FROM managerdb WHERE id=?`, [req.params.dbId])
        if (!db[0]) {
            return res.status(404).send('Database Does not Exist!')
        }
        const dbName = db[0].name
        const newData = req.body.data.map((item) => {
            let query = `${item.column} ${item.type} ${item.options.join(" ")}`
            if (item.pk) {
                query += `, ${item.pk} (${item.column})`
            }
            if (item.unique) {
                query += `, ${item.unique} ${item.column}_UNIQUE (${item.column})`
            }
            if (item.fk) {
                query += `, FOREIGN KEY (${item.column}) REFERENCES ${item.fk}`
            }
            return query
        }).join(",")

        const poolCraeteTable = mysql2.createPool({
            host: 'cloud.cxrmdauvfwmy.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: '29122002',
            port: '3306',
            database: `${dbName}`
        })
        const query = `CREATE TABLE ${req.body.tablename} (${newData})`
        await poolCraeteTable.execute(query)

        await pool.execute(`INSERT INTO managertable(name_table, id_db) VALUES(?, ?)`, [req.body.tablename, req.params.dbId])
        
        let [tables] = await pool.execute(`SELECT * FROM managertable WHERE id_db=? ORDER BY id_table DESC`, [req.params.dbId])

        req.body.data.map(async (item) => {
            await pool.execute(`INSERT INTO managercolumn(name_column, type, id_table)
                                VALUES(?, ?, ?)`, [item.column, item.type, tables[0].id_table])
        })

        res.status(200).send('Create Table Done!')
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createTableOnDB,
    createDataTable,
    updateDataTable,
    getAllDataTable,
    deleteDataTable,
    deleteTable,
    getTable,
    getDataTableById,
}