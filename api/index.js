const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const app = express();

const friend = require('./components/friend/network');

app.use(bodyParser.json())
//Routes
app.use('/api/friends', friend);

app.listen(config.api.port, () => {
  console.log(`[API] API listening on port ${config.api.port}`);
})