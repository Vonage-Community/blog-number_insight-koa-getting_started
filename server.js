require('dotenv').config()

const Koa = require('koa')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const { Vonage } = require('@vonage/server-sdk')

const port = process.env.PORT || 3000
const app = new Koa()
const router = new Router()

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
})

app.use(bodyParser())
app.use(serve('./public'))

router.post('/submit', async (ctx, next) => {
  const payload = ctx.request.body
  const number = payload.phone
  const insight = await getInsight(number)
  ctx.status = 200
  ctx.body = insight
})

async function getInsight(number) {
  try {
    // Update with basicLook, standardLookup, or advancedLookup as needed
    const result = await vonage.numberInsights.basicLookup(number)
    return result
  } catch (error) {
    console.error(error)
    throw error
  }
}

app.use(router.routes()).use(router.allowedMethods())

const listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})