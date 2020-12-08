const validator = require('../helpers/validate');

const login = (req, res, next) => {

    const validationRule = {
        "email": "required|email",
        "password": "required|digits:6",
	}
	
    validator(req.body, validationRule, {}, (err, status) => {
        if (err) {
			res.status(400)
				.send({
					message: "Campos inválidos"
				});
        } else {
			next();
		}
    });
}

module.exports = { 
  login
}