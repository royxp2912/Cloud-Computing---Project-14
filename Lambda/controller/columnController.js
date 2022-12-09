const pool = require('../config/connectRDS')

let getColumnTaBle = async (req, res, next) => {
    try {
        let [tables] = await pool.execute(`SELECT * FROM managertable WHERE id_table=?`, [req.params.tableId])
        if (!tables[0]) {
            return res.status(404).send('Table Does not Exist!')
        }

        const queryRead = `SELECT * FROM managercolumn WHERE id_table=${req.params.tableId}`
        let [info] = await pool.execute(queryRead)
        res.status(200).json({ info })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getColumnTaBle
}