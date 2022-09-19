const express = require('express')
const app = express()
const userRouter = require('./routers/userRouter')
const planRouter = require('./routers/planRouter')
const webpageRouter = require('./routers/webpageRouter')
const assetRouter = require('./routers/assetRouter')

const cors = require('cors')
const api_config = require('./config')
app.use(cors({ origin: 'http://localhost:3000' }))

app.use(express.json())

const port = api_config.port;
app.use('/user', userRouter)
app.use('/plan', planRouter)
app.use('/webpage', webpageRouter)
app.use('/asset', assetRouter)
app.get('/', (req, res) => {
    res.send('response from userRouter')
})
app.listen(port, () => {
    console.log('server started')
})