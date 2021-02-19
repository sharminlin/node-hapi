const { TABLE_SHOPS } = require('../constant/tables')

module.exports = (sequelize, DataTypes) => sequelize.define(
  TABLE_SHOPS,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumb_url: DataTypes.STRING,
  },
  {
    tableName: TABLE_SHOPS,
  },
);
