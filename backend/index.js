const express = require('express')
const app = express()
const userRouter = require('./routers/userRouter')
const planRouter = require('./routers/planRouter')
const webpageRouter = require('./routers/webpageRouter')

const cors = require('cors')
app.use(cors({ origin: 'http://localhost:3000' }))

app.use(express.json())

const port = process.env.PORT || 5000;
app.use('/user', userRouter)
app.use('/plan', planRouter)
app.use('/webpage', webpageRouter)
app.get('/', (req, res) => {
    res.send('response from userRouter')
})
app.listen(port, () => {
    console.log('server started')
})