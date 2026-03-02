const db = require('../config/db')

exports.createMany = async (shareholders) => {
if(!Array.isArray(shareholders) || shareholders.length === 0 ){
    console.log("Invalid input: shareholders should be a non-empty array");
    throw new Error("Invalid input: shareholders should be a non-empty array")
    
}
const query = "INSERT INTO shareholders (company_id, first_name, last_name , nationality) VALUES ?"
const values = shareholders.map( shareholder => [
    shareholder.company_id,
    shareholder.first_name,
    shareholder.last_name,
    shareholder.nationality

])
console.log(values);

await db.query (query, [values])
}