const crypto = require("crypto");

function generateUniqueId() {
  return crypto.randomBytes(10).toString("HEX");
}

module.exports = generateUniqueId;
