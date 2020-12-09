const axios = require('axios');
const fs = require('fs');
const coinDeskApi = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
const currenciesJsonPath = 'src/data/currencies.json';

const currencies = {
	'BRL': 'Brazilian Real',
	'CAD': 'Canadian Dollar',
	'EUR': 'Euro'
};

function calculateRate(USDRate, currencyRate) {
	return USDRate * currencyRate;
}

function createObj(USDObj, callback) {
	fs.readFile(currenciesJsonPath, (err, data) => {
		const dataObj = JSON.parse(data);

		let currenciesObj = {};

		for (const currency in currencies) {
			const rate_float = calculateRate(USDObj.rate_float, dataObj[currency]);
			
			currenciesObj = {...currenciesObj,
				[currency]: {
					'code': currency,
					'rate': rate_float.toString(),
					'description': currencies[currency],
					'rate_float': rate_float
				}
			};
		}
		callback(currenciesObj);
	});
}

const getQuotation = async (req, res) => {
	let coinDeskResponse = {};

	await axios.get(coinDeskApi)
		.then((response) => {
			coinDeskResponse = response.data;
		})
		.catch((error) => {
			res.status(400).send({'message': 'Algo deu errado na obtenção dos dados da API do CoinDesk'});
		});

	const USDObj = coinDeskResponse.bpi.USD;
	
	createObj(USDObj, (data) => {
		const newBpi = Object.assign(coinDeskResponse.bpi, data);

		coinDeskResponse.bpi = newBpi;
		
		res.status(200).send(coinDeskResponse);
	});	
}

const updateRates = (req, res) => {
	const fileContent = fs.readFileSync(currenciesJsonPath);
	const content = JSON.parse(fileContent);
	console.log(content);

	content[req.body.currency] = req.body.value;

	fs.writeFile(currenciesJsonPath, JSON.stringify(content), (err, data) => {
		if (err) {
			console.log(err);
			res.status(400).send({'message': `Não foi possível alterar o valor de ${req.body.currency}`});
		} else {
			res.status(200).end();
		}
	});
}

module.exports = {
	getQuotation,
	updateRates,
}