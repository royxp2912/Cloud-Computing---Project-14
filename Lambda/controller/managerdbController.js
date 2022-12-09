const pool = require('../config/connectRDS')
const con = require('../config/connectAdminRDS')
const mysql2 = require('mysql2/promise');

let deleteDB = async (req, res, next) => {
    try {
        let [db] = await pool.execute(`SELECT * FROM managerdb WHERE id=?`, [req.params.dbId])
        if (!db[0]) {
            return res.status(404).send('Database Does not Exist!')
        }
        // DELETE TRONG RDS
        const query = `DROP DATABASE ${db[0].name}`
        con.query(query, function (err, result) {
            if (err) throw err;
            console.log("Database has been delete!");
        });

        // DELETE TRONG APP
        let [tables] = await pool.execute(`SELECT * FROM managertable WHERE id_db=?`, [req.params.dbId])
        if (tables[0]) {
            tables.map(async (table) => {
                let query = `DELETE FROM managercolumn WHERE id_table=${table.id_table}`
                await pool.execute(query) 
            })
        }
        await pool.execute(`DELETE FROM managertable WHERE id_db=?`, [req.params.dbId])
        await pool.execute(`DELETE FROM managerdb WHERE id=?`, [req.params.dbId])
        
        res.status(200).send('Database has been delete!')
    } catch (err) {
        next(err)
    }
}

let createDB = async (req, res, next) => {
    try {
        const queryCreate = `INSERT INTO managerdb(name, username) VALUES("${req.body.name}","${req.body.username}")`
        await pool.execute(queryCreate)

        const query = `CREATE DATABASE ${req.body.name}`
        con.query(query, function (err, result) {
            if (err) throw err;
            console.log("Database created");
        });

        res.status(200).send('Create Database Done!')
    } catch (err) {
        next(err)
    }
}

let getDBOfUser = async (req, res, next) => {
    try {
        let [dbs, fields] = await pool.execute('SELECT * FROM managerdb WHERE username = ?', [req.params.username])
        if (!dbs[0]) {
            return res.status(200).send("Does Not Have Database!")
        }
        res.status(200).json({ info: dbs })
    } catch (err) {
        next(err)
    }
}

let getAllDB = async (req, res, next) => {
    try {
        let [dbs, fields] = await pool.execute('SELECT * FROM managerdb')
        if (!dbs[0]) {
            return res.status(200).send("Does Not Have Database!")
        }
        res.status(200).json({ info: dbs })
    } catch (err) {
        next(err)
    }
}

let getDBById = async (req, res, next) => {
    try {
        let [dbs, fields] = await pool.execute('SELECT * FROM managerdb WHERE id = ?', [req.params.dbId])
        if (!dbs[0]) {
            return res.status(200).send("Database Does Not Exist!")
        }
        res.status(200).json({ info: dbs })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getDBOfUser,
    getAllDB,
    getDBById,
    createDB,
    deleteDB,
}