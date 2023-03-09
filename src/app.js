// Dependencias //
const express = require('express')
const db = require('./tools/database')
const cors = require('cors')

// Archivos //
const {port} = require('./config')

// Rutas //
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const initModels = require('./models/initModels')

// Configuraciones Iniciales //
const app = express()

app.use(express.json())
app.use(cors())

db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced . . .')
    })
    .catch(err => {
        console.log(err)
    })

initModels()

app.get('/',(req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users`
    })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

