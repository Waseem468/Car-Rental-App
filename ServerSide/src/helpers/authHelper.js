const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error("Hashing Error:", error);
    throw new Error("Error hashing password");
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("Comparison Error:", error);
    throw new Error("Error comparing passwords");
  }
};

module.exports = { hashPassword, comparePassword };
