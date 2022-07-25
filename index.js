const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const errorHandler = require("./middleware/errorHandler")
const customerRouter = require("./routers/customerRouter")
const loanRouter = require("./routers/loansRouter")
const authRouter = require("./routers/authRouter")
const {json,urlencoded}  = express
const app = express()
require('dotenv').config()
const port = process.env.PORT  || 3000
const { seedAdmin } = require('./seeders/admin')

app.use(cors())
app.use(json())
app.use(errorHandler)
app.use("/auth",authRouter)
app.use("/customer",customerRouter)
app.use("/loan",loanRouter)
//MONGO_URI="mongodb+srv://Ezele:twF3tc7S9QEq5JgK@nodeexpressprojecct.kqdeu.mongodb.net/?retryWrites=true&w=majority"

console.log(seedAdmin());
connectDB(app,port)
