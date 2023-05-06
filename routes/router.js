const express = require('express')

const router = new express.Router()
//import userController
const userController = require('../controllers/userController')
//import upload
const upload = require('../multerConfig/storageConfig')

//register
router.post('/employee/register',upload.single('user_profile'),userController.usersRegister)




module.exports = router