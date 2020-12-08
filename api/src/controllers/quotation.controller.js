const axios = require('axios');
const fs = require('fs');
const coinDeskApi = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const currencies = {
	'BRL': 'Brazilian Real',
	'CAD': 'Canadian Dollar',
	'EUR': 'Euro'
};

function calculateRate(USDRate, currencyRate) {
	return USDRate * currencyRate;
}

function createObj(USDObj, callback) {
	fs.readFile('src/data/currencies.json', (err, data) => {
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

exports.getQuotation = async (req, res) => {
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