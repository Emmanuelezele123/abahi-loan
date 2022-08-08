const express = require("express")
const router = express.Router()
const {
   createLoan,
   getAllLoans,
   getLoan,
   updateLoan,
   deleteLoan,
   approveLoan
} = require("../controllers/loans")
const { authenticateUser, checkIfAdmin } = require('../middleware/authentication')
const { route } = require("./authRouter")

router.get("/",authenticateUser,getAllLoans)
router.get("/:id",authenticateUser,getLoan)
router.post("/",authenticateUser,createLoan)
router.put("/:id",authenticateUser,updateLoan)
router.put("/approve/:id",authenticateUser,checkIfAdmin,approveLoan)
router.delete("/:id",authenticateUser,checkIfAdmin,deleteLoan)

module.exports = router;