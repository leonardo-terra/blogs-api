const postCategorySchema = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER, primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER, primaryKey: true,
    },

  }, { timestamps: false });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory, // qual tabela faz o  "meio de campo"
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    })
  }



  return PostCategory;
}

module.exports = postCategorySchema;