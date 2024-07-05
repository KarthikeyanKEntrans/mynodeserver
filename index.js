const express = require('express')
var path = require('path');
const app = express()
const port = process.env.port | 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})