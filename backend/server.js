const express = require("express");
const cors = require("cors")
const db = require("./config/db")
const dotenv = require("dotenv")
const apiRoutes = require("./routes/apiRoutes")
const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use("/api", apiRoutes)
const PORT = process.env.PORT || 5000


app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})
