const crypto = require('crypto');
const db = require('../helpers/lowdb');

function saveToken(token) {
  db.get('validTokens').push({ token }).write();
}

exports.login = async (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  saveToken(token);
  res.send({ token });
};
