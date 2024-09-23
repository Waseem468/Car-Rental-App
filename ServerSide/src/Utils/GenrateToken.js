const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (userId) => {
  return jwt.sign({ _id: userId }, SECRET_KEY, { expiresIn: "20d" });
};

module.exports = { generateToken };
