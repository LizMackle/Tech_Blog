const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'This assignment is hard',
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: 'CSS styling is my favorite part of this course',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text:
      'Bcrypt is important to use to keep sensitive information hidden',
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
