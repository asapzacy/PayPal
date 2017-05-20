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
      type: 'Visa',
      cc: '4662 2194 7795 2314',
      expiration: '12/20',
      csc: '789'
    },
    {
      first: 'Zac',
      last: 'Arellano',
      type: 'Amex',
      cc: '0997 5161 2973 3580',
      expiration: '12/20',
      csc: '789'
    },
    {
      first: 'Zac',
      last: 'Arellano',
      type: 'Mastercard',
      cc: '1172 2652 1367 2374',
      expiration: '12/20',
      csc: '789'
    },
    {
      first: 'Zac',
      last: 'Arellano',
      type: 'Discover',
      cc: '7805 0741 8841 7262',
      expiration: '12/20',
      csc: '789'
    },
    {
      first: 'Zac',
      last: 'Arellano',
      type: 'Visa',
      cc: '5712 2811 8426 4795',
      expiration: '12/20',
      csc: '789'
    },
    {
      first: 'Zac',
      last: 'Arellano',
      type: 'Amex',
      cc: '5468 2383 1164 6348',
      expiration: '12/20',
      csc: '789'
    },
    {
      first: 'Zac',
      last: 'Arellano',
      type: 'Mastercard',
      cc: '3086 7312 5618 9752',
      expiration: '12/20',
      csc: '789'
    },
    {
      first: 'Zac',
      last: 'Arellano',
      type: 'Discover',
      cc: '8934 5908 1123 2547',
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
