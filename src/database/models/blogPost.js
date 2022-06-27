const blogPostSchema = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    title: DataTypes.STRING(255),
    content: DataTypes.STRING(255),
    userId: { type: DataTypes.STRING, foreignKey: true },
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  }

  return BlogPost;
}

module.exports = blogPostSchema;