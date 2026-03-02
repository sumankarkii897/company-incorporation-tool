const Shareholder = require("../models/shareholderModel")

exports.addShareholders = async (req,res)=> {
    try {
        const shareholders = req.body;
          if (!Array.isArray(shareholders) || shareholders.length === 0) {
            return res.status(400).json({ message: "Invalid input: must be a non-empty array" });
        }
        await Shareholder.createMany(shareholders);
        res.status(201).json({
            message:"Shareholders added successfully",
            shareholders

        })
    } catch (error) {
        console.log("error :" ,error.message);
        res.status(500).json({
            message : "Error adding shareholders",
            error : error.message
        })
        
        
    }
}