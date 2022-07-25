const mongoose = require('mongoose')
require('dotenv').config()
const { MONGO_URI } = process.env

const connectDB = (app,portNumber) => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        app.listen(portNumber,()=>{console.log("Abahi loan app is running on "+portNumber)})

    }).catch((err) => {
        console.log(err.message)
        console.error(err)
        process.exit(1)
    })
}

module.exports = connectDB