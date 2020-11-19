const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AUTHS extends Model {
    static associate(models) {
      this.hasOne(models.users, { foreignKey: 'user_idx', sourceKey: 'idx' });
    }
  }
  AUTHS.init(
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true,
      },
      id: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      secret_key: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'auths',
      timestamps: false,
    }
  );
  return AUTHS;
};
