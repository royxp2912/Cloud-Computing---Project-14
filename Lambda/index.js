const express = require('express')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const managerdbRoute = require('./routes/managerdb')
const managertableRoute = require('./routes/managertable')
const managercolumnRoute = require('./routes/column')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
dotenv.config();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use('/user', userRoute)
app.use('/auth', authRoute)
app.use('/managerdb', managerdbRoute)
app.use('/managertable', managertableRoute)
app.use('/managercolumn', managercolumnRoute)

app.use((error, req, res, next) => {
    const errStatus = error.status || 500;
    const errMessage = error.message || 'Something went wrong!';

    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
    });
});

module.exports = app