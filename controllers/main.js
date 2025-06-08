const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { BadRequestError, UnauthenticatedError } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError('Please provide username and password');
  }
  const user = await User.findOne({ username });
  if (!user) {
    throw new UnauthenticatedError('Invalid username or password');
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new UnauthenticatedError('Invalid username or password');
  }
  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
  res.status(200).json({ msg: 'User logged in', token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };