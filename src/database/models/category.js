const CategorySchema = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    name: DataTypes.STRING(255),

  }, { timestamps: false });

  /*   CategoryTable.associate = (models) => {
      CategoryTable.hasMany(models.BlogPost,
        { foreignKey: 'CategoryId', as: 'Category' });
    }
   */
  return Category;
}

module.exports = CategorySchema;