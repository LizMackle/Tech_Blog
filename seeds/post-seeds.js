const { Post } = require('../models');

const postData = [
  {
    title: 'Test post 1',
    content: 'testing',
    user_id: 1,
  },
  {
    title: 'Test post 2',
    content: 'testing',
    user_id: 2,
  },
  {
    title: 'Test post 3',
    content: 'testing',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
