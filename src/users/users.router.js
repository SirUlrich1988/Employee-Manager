const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')
const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)

router.get('/', userServices.getAllUsers)

// Todo el registerUser ira en la ruta /auth/register //

// Rutas dinamicas por ID /users/:id //

// router.get('/:id') //
// router.patch('/:id') //
// router.put('/:id') //
// router.delete('/:id') //

router.route('/:id')
.get(userServices.getUserById)
.patch(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    userServices.patchUser)

.delete(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    userServices.deleteUser)

module.exports = router