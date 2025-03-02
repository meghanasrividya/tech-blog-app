const { User, Post } = require('../models');

const seed = async () => {
  await User.create({
    username: 'testuser',
    email: 'testuser@example.com',
    password: 'password123',
  });

  await Post.create({
    title: 'First Post',
    content: 'This is the content of the first post.',
    category: 'General',
    userId: 1,
  });

  console.log('Database seeded!');
};

seed();