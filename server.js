// #!/usr/bin/env node
const express = require('express')
const compression = require('compression')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9090
const sampleData = require('./app/data/sample_data')

app.use(compression())
app.use(cors())

app.get('/api', (req, res) => {
  console.log(sampleData)
  res.send(sampleData)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port, () => {
  console.log(`server listen on port ${port}`)
})

module.exports = app
