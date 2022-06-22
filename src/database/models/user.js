const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255),
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'user' });
  }

  return UserTable;
}

module.exports = UserSchema;