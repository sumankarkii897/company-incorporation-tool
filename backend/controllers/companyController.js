const Company = require("../models/companyModel")

exports.createCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.status(201).json({
            message:"Company created successfully",
            // company
        })
    } catch (error) {
        res.json({
            message:" Error creating company",
            error: error.message
        })
    }
}

exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.getAll();
        res.json({
            message: "Companies fetched successfully",
            companies
        })
    } catch (error) {
        res.json({
            message: "Error fetching companies",
            error: error.message
        })
    }
}

exports.getCompanyById = async (req, res) => {
    try {
        const company = await Company.getById(req.params.id);
        res.json({
            message: "Company fetched successfully",
            company
        })
    } catch (error) {
        res.json({
            message: "Error fetching company",
            error: error.message
        })
    }
}