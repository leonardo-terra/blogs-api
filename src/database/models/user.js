const UserSchema = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    displayName: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255),
  }, { timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blogPost' });
  }

  return User;
}

module.exports = UserSchema;