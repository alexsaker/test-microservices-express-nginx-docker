const express = require('express')
const app = express()
const serverName = "Server1";

app.get('/', (req, res) => res.send(`Hello World from ${serverName}!`));
app.listen(3001, () => console.log(`${serverName} listening on port 3001!`));