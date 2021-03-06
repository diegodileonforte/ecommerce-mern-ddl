const router = require('express').Router()
const userController = require('../controllers/userController')
const auth = require('../auth/auth')

router.post('/register', userController.register)

router.post('/login', userController.login)

router.get('/logout', userController.logout)

router.get('/refresh_token', userController.refreshToken)

router.get('/info', auth, userController.getUser)

module.exports = router