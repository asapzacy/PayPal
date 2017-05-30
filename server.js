// #!/usr/bin/env node
const express = require('express')
const compression = require('compression')
const cors = require('cors')
const port = process.env.PORT || 9090

const app = express()
app.use(compression())
app.use(cors())

//  helper functions
const randomCcNumber = () => {
  let cc = ''
  for (let i = 1; i <= 16; i++) {
    cc += Math.floor(Math.random() * 10)
    if (i % 4 === 0) {
      cc += ' '
    }
  }
  return cc.slice(0,-1)
}
const randomCcType = () => {
  const types = ['Amex', 'Discover', 'Mastercard', 'Visa']
  return types[Math.floor(Math.random() * types.length)]
}
const createUserInfo = () => ({
  name: 'Zac',
  price: 88.08
})
const createPayments = () => {
  const payments = []
  for (let i = 0; i < 8; i++) {
    payments.push({
      first: 'Zac',
      last: 'Arellano',
      type: randomCcType(),
      cc: randomCcNumber(),
      expiration: '12/20',
      csc: '123'
    })
  }
  return payments
}

// API request
app.get('/api/sampleData', (req, res) => {
  const sample_data = {
    user: createUserInfo(),
    payments: createPayments()
  }
  console.log(sample_data)
  res.send(sample_data)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port, () => {
  console.log(`server listen on port ${port}`)
})

module.exports = app
