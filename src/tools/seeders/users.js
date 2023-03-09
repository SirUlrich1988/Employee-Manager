const uuid = require('uuid')
const Users = require('../../models/users.models')

Users.bulkCreate([
    {
        id: uuid.v4(),
        firstName: 'Manuel',
        lastName: 'Hernandez',
        email: 'hernandez@example.com',
        password: 'root',
        phone: '52 1122334455',
        area: 'Recursos Humanos',
        job: 'Administrador de Personal'
    },
    {
        id: uuid.v4(),
        firstName: 'Antonio',
        lastName: 'Herrera',
        email: 'herrera@example.com',
        password: 'root',
        phone: '52 1124934455',
        area: 'Administracion',
        job: 'Gerente'
    },
    {
        id: uuid.v4(),
        firstName: 'Jimena',
        lastName: 'Alvarez',
        email: 'alvarez@example.com',
        password: 'root',
        phone: '52 1122738255',
        area: 'Cocina',
        job: 'Chef Ejecutiva'
    },
    {
        id: uuid.v4(),
        firstName: 'Daniela',
        lastName: 'Rodriguez',
        email: 'rodriguez@example.com',
        password: 'root',
        phone: '52 1146183455',
        area: 'Costos',
        job: 'Auditora Nocturna'
    },
    {
        id: uuid.v4(),
        firstName: 'Jesus',
        lastName: 'Fernandez',
        email: 'fernandez@example.com',
        password: 'root',
        phone: '52 1156434455',
        area: 'Restaurante',
        job: 'Mesero'
    },
    {
        id: uuid.v4(),
        firstName: 'Ernesto',
        lastName: 'Mata',
        email: 'mata@example.com',
        password: 'root',
        phone: '52 1122918265',
        area: 'Almacen',
        job: 'Almacenista'
    },
])