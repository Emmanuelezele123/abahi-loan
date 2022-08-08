const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");
const { authenticateUser, checkIfAdmin } = require('../middleware/authentication')

router.post('/signup',checkIfAdmin, AuthController.registerNewUser)
router.post('/login', AuthController.loginUser)
router.post('/logout',AuthController.logOut)
module.exports = router