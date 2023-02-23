const express = require('express');

const config = require('../config.js');
const app = express()

const friend = require('./components/friend/network');

//Routes
app.use('/api/friend', friend);

app.listen(config.api.port, () => {
  console.log(`Api listening on port ${config.api.port}`)
})