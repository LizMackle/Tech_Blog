const { User } = require('../models');

const userData = [
  {
    username: 'LizMackle',
    password: 'pw123456',
  },
  {
    username: 'JohnTaylor',
    password: 'pw123456',
  },
  {
    username: 'LaurenRichards',
    password: 'pw123456',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
