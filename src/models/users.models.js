const db = require("../tools/database");

const { DataTypes } = require("sequelize");

const Users = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  job: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active",
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: "is_verified",
    defaultValue: false,
  },
})

module.exports = Users;
