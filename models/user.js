'use strict';

const bcrypt = require('bcryptjs');

module.exports = function(sequalize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes:,
      allowNull: false,
      set(password){
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        this.password = hash;
      }
    }
  });
}
