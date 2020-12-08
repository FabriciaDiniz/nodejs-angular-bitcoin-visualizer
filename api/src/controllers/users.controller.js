const crypto = require('crypto');
const db = require('../helpers/lowdb');

function saveToken(token) {
	db.get('validTokens')
		.push({ token: token})
		.write();
}

exports.login = async (req, res) => {
	const token = crypto.randomBytes(16).toString('hex');
	saveToken(token);
	res.send({ token: token });
}