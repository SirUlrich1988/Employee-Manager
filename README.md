# Skeleton Api Employee Manager #

1.- Express
2.- PostgreSQL
3.- Sequelize ORM
4.- Autenticacion con Tokens
5.- Bcrypt para hashear contraseñas
6.- Uso de Json Web Token

--- --- --- --- --- --- --- --- --- ---

- Rutas de Login y Creacion de Empleados
- Autenticacion y manejo de Permisos

--- --- --- --- --- --- --- --- --- ---

Orden de Creacion de Archivos

- app.js
- .env
- config.js
- database.js
- modelos
- controladores
- servicios
- rutas

--- --- --- --- --- --- --- --- --- ---

Librerias para iniciar Skeleton

- npm init --y
- npm i express
- npm i uuid
- npm install dotenv --save
- npm i --save sequelize
- npm i --save pg pg-hstore # postgres
- npm i cors
- npm i pg pg-hstore
- npm i -D mocha chai chai-http
- npm i @faker-js/faker --save-dev

- npm i -D nodemon

--- --- --- --- --- --- --- --- --- ---

Librerias para Autenticacion y Verificacion

- npm install passport passport-jwt jsonwebtoken
- npm i bcrypt

--- --- --- --- --- --- --- --- --- ---

- Ruta para Registro de un Administrador

- Post : localhost:9000/api/v1/auth/register/ 

datos solicitados ejemplo:

{
    "firstName": "Administrador",
    "lastName": "Principal",
    "email": "admin@admin.com",
    "password": "root123",
    "phone": "+52 9985645123",
    "area": "Sistemas",
    "job": "Administrador de Redes"
}

- Ruta para logear un usuario registrado

- Post : localhost:9000/api/v1/auth/login/

datos solicitados ejemplo:

{
  "email": "admin@admin.com",
  "password": "rock1227"
}

- Ruta para Mostrar Todos los Usuarios

- Get : localhost:9000/api/v1/users/


