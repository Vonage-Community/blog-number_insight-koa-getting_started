require('dotenv').config()

const express = require('express')
const { Vonage } = require('@vonage/server-sdk')

const port = process.env.PORT || 3000

const app = new express()

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
})

app.use(express.json())
app.use(express.static('./public'))

app.post('/submit', async (req, res) => {
  const payload = req.body
  const number = payload.phone
  const insight = await getInsight(number)

  res.status(200).json(insight)
})

async function getInsight(number) {
  try {
    // Update with basicLookup, standardLookup, or advancedLookup as needed
    const result = await vonage.numberInsights.basicLookup(number)
    return result
  } catch (error) {
    console.error(error)
    throw error
  }
}

const listener = app.listen(port, function() {
  console.log('Your app is listening on port ' + listener.address().port)
})