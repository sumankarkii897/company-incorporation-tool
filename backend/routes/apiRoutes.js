const express = require("express")
const router = express.Router();

const companyController = require("../controllers/companyController")
const shareholderController = require("../controllers/shareholderController")

router.post("/companies", companyController.createCompany)
router.get("/companies", companyController.getAllCompanies)
router.get("/companies/:id", companyController.getCompanyById)
router.post("/shareholders", shareholderController.addShareholders)

module.exports = router;