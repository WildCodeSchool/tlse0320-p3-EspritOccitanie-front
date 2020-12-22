const { PORT, SERVER_URL } = require('./src/env');
const express = require('express');
const app = express();
const path = require('path');
const port = PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/app/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log('Listening on Port', port);
});
