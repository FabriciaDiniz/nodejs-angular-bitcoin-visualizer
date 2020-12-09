const db = require('../helpers/lowdb');
const validator = require('../helpers/validate');

const login = (req, res, next) => {

    const validationRuleLogin = {
        "email": "required|email",
        "password": "required|digits:6",
	}
	
    validator(req.body, validationRuleLogin, {}, (err, status) => {
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

const checkToken = (req, res, next) => {

    const validationRuleAuth = {
        'authorization': 'required|alpha_num|size:16'
    }

    validator(req.headers, validationRuleAuth, {}, (err, status) => {
        const hasToken = db.has('validTokens')
            .value(req.headers.authorization);
        
        if (status) {     
            hasToken && next();
        } else if (!hasToken || err) {
            res.status(401).send({
                'message': 'Token inválido'
            });
        }
    }); 
}

const checkParams = (req, res, next) => {

    const validationRuleCurr = {
        'currency': 'required|string|size:3'    
    }

    const validationRuleValue = {
        'value': 'required|numeric|min:0.1'
    }

    let error = false;

    validator(req.body, validationRuleCurr, {}, (err, status) => {
        if (err) {
            error = err;
            res.status(400).send({ message: "Moeda inválida" });
        }
    });
    if (!error) {
        validator(req.body, validationRuleValue, {}, (err, status) => {
            if (err) {
                res.status(400).send({ message: "Valor inválido" });
            } else {
                next();
            }
        });
    }
}

module.exports = { 
    login,
    checkToken,
    checkParams,
}