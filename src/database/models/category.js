const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define("Category", {
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
  return CategoryTable;
}

module.exports = CategorySchema;