const mysql = require("mysql2")
require("dotenv").config()
const connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
})

// const db = connection.promise();

connection.connect ((err) => {
    if (err) {
        console.log("Error connecting to the database : ", err.message)
        throw err;
    }
    console.log("Connected to MySQL database successfully")

})
module.exports = connection.promise()