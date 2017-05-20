// #!/usr/bin/env node
const express = require('express')
const compression = require('compression')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9090

app.use(compression())
app.use(cors())

const sampleData = {
  name: 'Zac',
  price: 88.08,
  payments: [
    {
      first: 'Zac',
      last: 'Arellano',
      cc: '1234 1234 1234 1234',
      expiration: '12/20',
      csc: '789'
    }
  ]
}

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
