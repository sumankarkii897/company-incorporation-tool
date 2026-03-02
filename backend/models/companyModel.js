const db = require("../config/db")

exports.create = async (company)=> {
    const query = "INSERT INTO companies (name, num_shareholders,total_capital) VALUES (?,?, ?)";
    const [row] = await db.query(query, [company.name, company.num_shareholders, company.total_capital]);
    return row;
}

exports.getAll = async ()=> {
    const query = "SELECT c.*, GROUP_CONCAT(JSON_OBJECT('id', s.id, 'first_name', s.first_name, 'last_name', s.last_name)) AS shareholders FROM companies c LEFT JOIN shareholders s ON c.id = s.company_id GROUP BY c.id";
    const [rows] = await db.query(query);

    const results = rows.map( row => {
        row.shareholders = row.shareholders ? JSON.parse(`[${row.shareholders}]`) : [];
        return row;
    })
    return results;
}

exports.getById = async (id) => {
    const query = 'SELECT * FROM companies WHERE id = ?';
    const [rows] = await db.query(query,[id]);
    if(!rows.length) {
        console.log("Company not found");
        throw new Error ("Company not found")
        
    }
    return rows[0];
}