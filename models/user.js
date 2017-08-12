'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequalize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(password) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        this.setDataValue('password', hash);
      }
    }
  });

  User.prototype.auth = (password) => {
    return bcrypt.compareSync(password, this.password);
  }
  return User
}
