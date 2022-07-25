const express = require("express")
const router = express.Router()
const { 
    createCustomer,
    deleteCustomer,
    getAllCustomers,
    getCustomer,
    updateCustomer,
} = require("../controllers/customer")
const { authenticateUser, checkIfAdmin } = require('../middleware/authentication')





router.get("/",authenticateUser,getAllCustomers)
router.get("/:id",authenticateUser,getCustomer)
router.post("/",authenticateUser,createCustomer)
router.put("/:id",authenticateUser,updateCustomer)
router.delete("/:id",authenticateUser,checkIfAdmin,deleteCustomer)

module.exports = router;