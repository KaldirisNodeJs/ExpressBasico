const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Servidor respondendo porta 3000')
})

app.listen(3000)
console.log("Pronto.")