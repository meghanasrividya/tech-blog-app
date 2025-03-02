const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync();

module.exports = {
  User,
  Post,
};