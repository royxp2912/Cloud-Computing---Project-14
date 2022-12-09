const pool = require('../config/connectRDS')
const jwt = require('jsonwebtoken')
const createError = require('../others/createError')

const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body

        await pool.execute(`
            INSERT INTO user(username, email, password)
            VALUES(?, ?, ?)`, [username, email, password])
        res.status(200).send("Create User Done!")
    } catch (err) {
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        let [ user, fileds ] = await pool.execute(`SELECT * FROM user WHERE username = ?`, [req.body.username])
        if (!user) {
            return next(createError(404, "Username not found!"))
        }

        if (!(req.body.password === user[0].password)) {
            return next(createError(404, "Wrong password or username!"))
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT)

        const { password, ...otherInfo } = user[0]
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({ ...otherInfo })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    register,
    login
}