const express = require('express');
const cors = require('cors');

const app = express();

const index = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);

app.use((req, res, next) => {
  res.status(404).send({
    message: 'Endpoint não encontrado',
  });
});

module.exports = app;
