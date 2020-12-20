const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.get('*', express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log('Listening on Port', port));
