const { TABLE_GOODS } = require('../constant/tables')

module.exports = (sequelize, DataTypes) => sequelize.define(
  TABLE_GOODS,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumb_url: DataTypes.STRING,
  },
  {
    tableName: TABLE_GOODS,
  },
);
