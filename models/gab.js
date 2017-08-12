'use strict';

module.exports = (sequalize, DataTypes) => {
  const Gab = sequelize.define('Gab', {
    description: DataTypes.STRING,
    allowNull: false,
  })
  return Gab;
}
