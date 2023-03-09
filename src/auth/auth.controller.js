// Email y Contraseña del usuario son los campos solicitados para Login //

const { getUserByEmail } = require("../users/users.controllers")
const { comparePassword } = require('../tools/crypto')

// El email debe ser unico en la base de datos //

const loginUser = async (email, password) => {

    // Este controlador tiene 2 posibles respuestas //
    // 1.- Las credenciales son validas y retornamos el usuario //
    // 2.- Las credenciales son invalidas y retornamos false //

    try {
        const user = await getUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password) // "user.password" contiene la contraseña encriptada de la base de datos //
        if(verifyPassword){
            return user
        } 
        return false
    } catch (err) {
        return false
    }
}

module.exports = { loginUser }