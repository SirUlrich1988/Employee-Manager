const uuid = require('uuid')

const Users = require('../models/users.models')
const { hashPassword } = require('../tools/crypto')

const getAllUsers = async () => {
    const data = await Users.findAll({
        where: {
            status: 'active'
        }
    })
    return data
}

const getUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id,
            status: 'active'
        }
    })
    return data
}

const createUser = async (data) => {
    const newUser = await Users.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        area: data.area,
        job: data.job
    })
    return newUser
}

const createManager = async (data) => {
    const newManager = await Users.create({
        firstName:data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
        password: hashPassword(data.password)
    })
    return newManager
}

const updateUser = async (id, data) => {
    const result = await Users.update(data, {
        where: {
            id
        }
    })
    return result
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id
        }
    })
    return data
}

const getUserByEmail = async(email) => {
    const data = await Users.findOne({
        where: {
            email: email,
            status: 'active'
        }
    })
    return data
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail,
    createManager
}