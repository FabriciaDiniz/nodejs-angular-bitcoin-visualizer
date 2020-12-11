const axios = require('axios');
const fs = require('fs');

const coinDeskApi = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
const currenciesJsonPath = 'src/data/currencies.json';

const currencies = {
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  EUR: 'Euro',
};

function getFileContent(filePath) {
  const fileContent = fs.readFileSync(filePath);
  return JSON.parse(fileContent);
}

function calculateRate(USDRate, currencyRate) {
  return USDRate * currencyRate;
}

function createObj(USDObj, callback) {
  fs.readFile(currenciesJsonPath, (err, data) => {
    const dataObj = JSON.parse(data);
    const currencyKeys = Object.keys(currencies);

    let currenciesObj = {};

    currencyKeys.forEach((currency) => {
      const rateFloat = calculateRate(USDObj.rate_float, dataObj[currency]);

      currenciesObj = {
        ...currenciesObj,
        [currency]: {
          code: currency,
          rate: rateFloat.toString(),
          description: currencies[currency],
          rate_float: rateFloat,
        },
      };
    });

    callback(currenciesObj);
  });
}

const getQuotation = async (req, res) => {
  let coinDeskResponse = {};

  await axios
    .get(coinDeskApi)
    .then((response) => {
      coinDeskResponse = response.data;
    })
    .catch(() => {
      res
        .status(400)
        .send({
          message: 'Algo deu errado na obtenção dos dados da API do CoinDesk',
        });
    });

  const USDObj = coinDeskResponse.bpi.USD;

  createObj(USDObj, (data) => {
    const newBpi = Object.assign(coinDeskResponse.bpi, data);

    coinDeskResponse.bpi = newBpi;

    res.status(200).send(coinDeskResponse);
  });
};

const updateRates = (req, res) => {
  if (res.finished) return;

  const fileContent = getFileContent(currenciesJsonPath);

  fileContent[req.body.currency] = req.body.value.toString();

  fs.writeFile(currenciesJsonPath, JSON.stringify(fileContent), (err) => {
    if (err) {
      res.status(400).send({
        message: `Não foi possível alterar o valor de ${req.body.currency}`,
      });
    } else {
      res.status(200).send({
        message: 'Valor alterado com sucesso!',
      });
    }
  });
};

const getCurrentRates = (req, res) => {
  const fileContent = getFileContent(currenciesJsonPath);
  res.status(200).send(fileContent);
};

module.exports = {
  getQuotation,
  updateRates,
  getCurrentRates,
};
