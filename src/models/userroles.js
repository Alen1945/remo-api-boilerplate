'use strict'
module.exports = (sequelize, DataTypes) => {
  const userRoles = sequelize.define('userRoles', {
    name: DataTypes.STRING,
    codeRole: DataTypes.STRING,
    isDelete: DataTypes.TINYINT
  }, {})
  userRoles.associate = function (models) {
    // associations can be defined here
  }
  return userRoles
}