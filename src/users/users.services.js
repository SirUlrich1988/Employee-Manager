const usersControllers = require("./users.controllers")

const getAllUsers = (req, res) => {
  usersControllers
    .getAllUsers()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({ message: err.message })
    })
}

const getUserById = (req, res) => {
  const id = req.params.id
  usersControllers
    .getUserById(id)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(404).json({ message: err.message })
    });
};

const registerUser = (req, res) => {
  const {firstName, lastName, email, phone, area, job } = req.body

    if (
        firstName &&
        lastName &&
        email &&
        phone &&
        area &&
        job
    ) {
        //? Ejecutamos el controller
        usersControllers.createUser({
          firstName, lastName, email, phone, area, job
        })
            .then( data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {

    // Error cuando no mandan todos los datos necesarios para crear un usuario //

        res.status(400).json({message: 'All fields must be completed', 
        fields: {
            firstName: 'string',
            lastName: 'string',
            email: 'example@example.com',
            phone: '+521231231231',
            area: 'string',
            job: 'string'
        }})
    }
}

const registerManager = (req, res) => {
  const {firstName, lastName, email, password, role} = req.body

    if (
        firstName &&
        lastName &&
        email &&
        password &&
        role
    ) {
        //? Ejecutamos el controller
        usersControllers.createUser({
          firstName, lastName, email, password, role})
            .then( data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {

    // Error cuando no mandan todos los datos necesarios para crear un usuario //

        res.status(400).json({message: 'All fields must be completed', 
        fields: {
            firstName: 'string',
            lastName: 'string',
            email: 'example@example.com',
            password: 'string',
            role: 'string'
        }})
    }
}


const patchUser = (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email, password, phone, area, job } = req.body

  usersControllers
    .updateUser(id, { firstName, lastName, email, password, phone, area, job })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `User with ID: ${id}, edited succesfully!` })
      } else {
        res.status(404).json({ message: "Invalid ID" })
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message })
    })
}

const deleteUser = (req, res) => {
  const id = req.params.id
  usersControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" })
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message })
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    patchUser,
    registerUser,
    deleteUser, 
    registerManager
}

