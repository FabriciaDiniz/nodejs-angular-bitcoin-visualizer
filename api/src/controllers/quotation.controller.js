const axios = require('axios');
const coinDeskApi = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

exports.getQuotation = async (req, res) => {
	axios.get(coinDeskApi)
		.then((response) => {
			res.status(200).send(response.data);
		})
		.catch((error) => {
			res.status(400).send('deu ruim pvt');
		}
	);
}