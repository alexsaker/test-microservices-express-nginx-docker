const express = require('express')
const app = express()
const serverName = "Server2";

app.get('/', (req, res) => res.send(`Hello World from ${serverName}!`));
app.listen(3002, () => console.log(`${serverName} listening on port 3002!`));