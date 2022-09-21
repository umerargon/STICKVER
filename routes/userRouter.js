const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
const registerValidator = require("../middleware/registerValidator");

// Register User
router.post('/register',registerValidator, registerValidator.register_validator,userCtrl.registerUser)
// Login User
router.post('/login', userCtrl.loginUser)

// verify Token
router.get('/verify', userCtrl.verifiedToken)

module.exports = router