const pool = require('../config/connectRDS')

let getAllUser = async (req, res, next) => {
    try {
        let [users, fields] = await pool.execute('SELECT * FROM user')

        res.status(200).json({ data: users })
    } catch(err) {
        next(err)
    }
}

module.exports = {
    getAllUser
}