const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    displayName: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255),
  }, { timestamps: false });

  /*   UserTable.associate = (models) => {
      UserTable.hasMany(models.BlogPost,
        { foreignKey: 'userId', as: 'user' });
    }
   */
  return UserTable;
}

module.exports = UserSchema;