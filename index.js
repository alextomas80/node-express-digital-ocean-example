// create express server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// hello world route
app.get('/', (req, res) => res.send('Hola Alex 🧑🏻‍💻'));

// server run
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
