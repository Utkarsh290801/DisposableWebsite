const stripe = require('stripe')('sk_test_51LxR1fSIiQlrWSHJzTPUErNmkBIiQjlTwbD4HBEx64rAUF3fZvWhmV0OF1WnaG3FpRJOvwo9EVBxM8cOxDbl8lpJ008uJGWEBo'); //1
const express = require('express')
const app = express()
const userRouter = require('./routers/userRouter')
const planRouter = require('./routers/planRouter')
const webpageRouter = require('./routers/webpageRouter')
const assetRouter = require('./routers/assetRouter')
const contactRouter = require("./routers/contactRouter");
const utilRouter = require("./routers/utils");
const cors = require('cors')
const api_config = require('./config')

app.use(express.static('public')); //2

app.use(cors({ origin: ['http://localhost:3000' ,'http://localhost:3001']}))
app.use(express.json ({limit: "10mb", extended: true}))
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))

// app.use(express.json())

const port = api_config.port;
app.use('/user', userRouter)
app.use('/plan', planRouter)
app.use('/webpage', webpageRouter)
app.use('/asset', assetRouter)
app.use("/contact", contactRouter);
app.use("/util", utilRouter);
app.get('/', (req, res) => {
    res.send('response from userRouter')
})

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${'http://localhost:3000'}?success=true`,
      cancel_url: `${'http://localhost:3000'}?canceled=true`,
    });
  
    res.redirect(303, session.url);
  }); //3

app.use(express.static('./static/uploads'))
app.listen(port, () => {
    console.log('server started')
})

// app.listen(4242, () => console.log('Running on port 4242')); //4